// Ivey Education Agents - Web Interface
// Frontend JavaScript

let selectedAgent = null;
let content = null;
let apiKey = null;

// Load API key from localStorage
window.addEventListener('DOMContentLoaded', () => {
    const savedKey = localStorage.getItem('anthropic_api_key');
    if (savedKey) {
        document.getElementById('apiKey').value = savedKey;
        apiKey = savedKey;
        updateRunButton();
    }
});

// API Key handling
document.getElementById('apiKey').addEventListener('input', (e) => {
    apiKey = e.target.value.trim();
    if (apiKey) {
        localStorage.setItem('anthropic_api_key', apiKey);
    }
    updateRunButton();
});

// Agent selection
document.querySelectorAll('.agent-card').forEach(card => {
    card.addEventListener('click', () => {
        // Remove selected from all cards
        document.querySelectorAll('.agent-card').forEach(c => c.classList.remove('selected'));
        // Add selected to clicked card
        card.classList.add('selected');
        selectedAgent = card.dataset.agent;
        updateRunButton();
    });
});

// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.dataset.tab;

        // Update tab buttons
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        document.getElementById(`${tabName}-tab`).classList.add('active');

        updateRunButton();
    });
});

// File upload handling
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');

uploadArea.addEventListener('click', () => fileInput.click());

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        handleFile(e.target.files[0]);
    }
});

function handleFile(file) {
    if (!file.name.endsWith('.html') && !file.name.endsWith('.htm')) {
        alert('Please upload an HTML file (.html or .htm)');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        content = e.target.result;
        document.getElementById('fileName').textContent = `✓ Selected: ${file.name}`;
        updateRunButton();
    };
    reader.readAsText(file);
}

// Paste content handling
document.getElementById('contentInput').addEventListener('input', (e) => {
    content = e.target.value.trim();
    updateRunButton();
});

// URL input handling
document.getElementById('urlInput').addEventListener('input', (e) => {
    content = e.target.value.trim();
    updateRunButton();
});

// Update run button state
function updateRunButton() {
    const runBtn = document.getElementById('runBtn');
    const hasApiKey = apiKey && apiKey.length > 0;
    const hasAgent = selectedAgent !== null;
    const hasContent = content && content.length > 0;

    runBtn.disabled = !(hasApiKey && hasAgent && hasContent);
}

// Run analysis
document.getElementById('runBtn').addEventListener('click', async () => {
    if (!apiKey || !selectedAgent || !content) return;

    // Show loading
    document.getElementById('loading').classList.add('active');
    document.getElementById('results').classList.remove('active');

    // Update agent name and estimated time
    const agentNames = {
        'sports-content-reviewer-fast': { name: 'Sports Content Reviewer', time: '5-15 seconds' },
        'accessibility-auditor': { name: 'Accessibility Auditor', time: '2-5 minutes' },
        'branding-checker': { name: 'Branding Checker', time: '2-5 minutes' },
        'widget-tester': { name: 'Widget Tester', time: '3-5 minutes' },
        'rubric-generator': { name: 'Rubric Generator', time: '3-5 minutes' },
        'student-journey-simulator': { name: 'Student Journey Simulator', time: '5-8 minutes' }
    };

    const agentInfo = agentNames[selectedAgent] || { name: 'Agent', time: 'a few moments' };
    document.getElementById('agentName').textContent = agentInfo.name;
    document.getElementById('estimatedTime').textContent = agentInfo.time;

    try {
        // Call backend API
        const response = await fetch('/api/run-agent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                agent: selectedAgent,
                content: content,
                apiKey: apiKey
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        // Hide loading
        document.getElementById('loading').classList.remove('active');

        // Show results
        document.getElementById('results').classList.add('active');
        document.getElementById('resultContent').textContent = result.report || result.error || 'No results returned';

        // Scroll to results
        document.getElementById('results').scrollIntoView({ behavior: 'smooth' });

    } catch (error) {
        console.error('Error:', error);

        // Hide loading
        document.getElementById('loading').classList.remove('active');

        // Show error
        alert(`Error running agent: ${error.message}\n\nThis is a demo interface. To use the full functionality, you need to set up the backend server.\n\nSee README.md for instructions.`);
    }
});

// Download report
document.getElementById('downloadBtn').addEventListener('click', () => {
    const content = document.getElementById('resultContent').textContent;
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedAgent}-report-${new Date().toISOString().slice(0,10)}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
