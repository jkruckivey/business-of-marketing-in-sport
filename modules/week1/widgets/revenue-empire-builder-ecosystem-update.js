/**
 * REVENUE EMPIRE BUILDER - ECOSYSTEM CASCADE UPDATE
 *
 * This file contains the updated JavaScript logic for the Revenue Empire Builder widget.
 * It implements the ecosystem cascade effects where investment in one stream amplifies others.
 *
 * INSTRUCTIONS:
 * Replace the relevant sections in revenue-empire-builder.html with this code.
 *
 * Version: 2.0.0
 * Last Updated: 2026-01-22
 */

// ============================================================================
// SECTION 1: ADD THIS AFTER gameState DEFINITION (around line 940)
// ============================================================================

// Ecosystem amplification: when you invest in stream X, stream Y benefits
const cascadeEffects = {
    ticketing: {
        // Star player investment / fan experience → amplifies other streams
        media: 0.15,        // Better attendance → better TV product
        merchandising: 0.25, // Engaged fans buy more gear
        betting: 0.20,      // Live attendance drives betting engagement
        sponsorship: 0.10   // Better atmosphere → sponsor value
    },
    media: {
        // Better media exposure → brand amplification
        sponsorship: 0.30,  // More eyeballs → sponsor value increases
        merchandising: 0.15, // Broader reach → more merchandise sales
        betting: 0.10       // Media integration drives betting
    },
    sponsorship: {
        // Sponsor activations → fan engagement
        ticketing: 0.10,    // Sponsor promotions drive attendance
        merchandising: 0.08  // Co-branded merchandise
    },
    merchandising: {
        // Brand visibility → minimal cascade
        media: 0.05         // Merchandise visibility = brand awareness
    },
    betting: {
        // Betting partnerships → engagement
        media: 0.12,        // Betting content drives viewership
        ticketing: 0.08     // Betting promotions at venue
    }
};

// ============================================================================
// SECTION 2: ADD THIS CSS (add to <style> section, around line 340)
// ============================================================================

/*
.cascade-panel {
    background: linear-gradient(135deg, var(--color-green) 0%, var(--color-turquoise) 100%);
    border-radius: 8px;
    padding: 1rem 1.25rem;
    margin-bottom: 1rem;
}

.cascade-panel h4 {
    font-size: 0.9rem;
    color: var(--color-neutral-800);
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.cascade-flows {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.cascade-flow {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: var(--color-neutral-700);
    background: rgba(255,255,255,0.6);
    padding: 0.4rem 0.75rem;
    border-radius: 4px;
}

.cascade-source {
    font-weight: 600;
    color: var(--color-neutral-800);
    min-width: 100px;
}

.cascade-arrow {
    color: var(--color-neutral-400);
}

.cascade-targets {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 0.5rem;
}

.cascade-target {
    color: #059669;
    font-weight: 500;
}

.cascade-total {
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(0,0,0,0.1);
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-neutral-800);
}

.cascade-total-value {
    color: #059669;
}

.no-cascade {
    font-size: 0.85rem;
    color: var(--color-neutral-500);
    font-style: italic;
}
*/

// ============================================================================
// SECTION 3: ADD THIS HTML (add after event-impact-summary div, around line 860)
// ============================================================================

/*
<div id="cascade-panel" class="cascade-panel" style="display: none;">
    <h4>🔄 Ecosystem Cascade Effects</h4>
    <div id="cascade-content"></div>
</div>
*/

// ============================================================================
// SECTION 4: REPLACE updateProjections() FUNCTION (around line 1182)
// ============================================================================

function updateProjections() {
    const totalFocus = gameState.streams.reduce((sum, s) => sum + s.focus, 0);

    // Show warning if focus doesn't equal 100
    const warning = document.getElementById('focus-warning');
    if (totalFocus !== 100) {
        warning.style.display = 'block';
        const diff = totalFocus > 100 ? `${totalFocus - 100}% over` : `${100 - totalFocus}% under`;
        warning.textContent = `Total focus: ${totalFocus}% (${diff}) — must equal exactly 100% to proceed`;
    } else {
        warning.style.display = 'none';
    }

    // ========== STEP 1: Calculate base growth with focus multiplier ==========
    let projectedValues = {};
    let baseGrowthValues = {};

    gameState.streams.forEach(stream => {
        // Original focus multiplier: 0% = 0.5×, 50% = 1.0×, 100% = 1.5×
        const focusMultiplier = 0.5 + (stream.focus / 100);
        let effectiveGrowth = stream.baseGrowth * focusMultiplier;

        // Apply event effects if selected
        if (gameState.currentYear > 1 && gameState.selectedEventChoice) {
            const event = gameState.events[gameState.currentYear];
            const choice = event.choices.find(c => c.id === gameState.selectedEventChoice);
            if (choice && choice.effects && choice.effects[stream.id]) {
                effectiveGrowth *= choice.effects[stream.id];
            }
        }

        const projectedValue = stream.currentValue * (1 + effectiveGrowth);
        projectedValues[stream.id] = projectedValue;
        baseGrowthValues[stream.id] = stream.currentValue * effectiveGrowth;
    });

    // ========== STEP 2: Calculate cascade bonuses (THE KEY ADDITION) ==========
    const cascadeBonuses = {};
    const cascadeDetails = []; // For UI display

    gameState.streams.forEach(sourceStream => {
        const sourceFocus = sourceStream.focus / 100;

        // Only calculate cascade if stream has meaningful focus (>10%)
        if (sourceFocus > 0.1 && cascadeEffects[sourceStream.id]) {
            const sourceInvestment = sourceStream.currentValue * sourceFocus;
            const streamCascades = [];

            Object.entries(cascadeEffects[sourceStream.id]).forEach(([targetId, multiplier]) => {
                if (!cascadeBonuses[targetId]) cascadeBonuses[targetId] = 0;

                // Cascade bonus = source investment × multiplier × source focus
                // Focus appears twice: once in sourceInvestment, once as multiplier
                // This rewards concentrated investment in ecosystem drivers
                const cascadeBonus = sourceInvestment * multiplier * sourceFocus;
                cascadeBonuses[targetId] += cascadeBonus;

                if (cascadeBonus > 100000) { // Only show meaningful cascades (>$100K)
                    const targetStream = gameState.streams.find(s => s.id === targetId);
                    streamCascades.push({
                        target: targetStream.name,
                        bonus: cascadeBonus
                    });
                }
            });

            if (streamCascades.length > 0) {
                cascadeDetails.push({
                    source: sourceStream.name,
                    focus: sourceStream.focus,
                    targets: streamCascades
                });
            }
        }
    });

    // ========== STEP 3: Apply cascade bonuses to projected values ==========
    let totalCascadeBonus = 0;
    gameState.streams.forEach(stream => {
        if (cascadeBonuses[stream.id]) {
            projectedValues[stream.id] += cascadeBonuses[stream.id];
            totalCascadeBonus += cascadeBonuses[stream.id];
        }
    });

    // ========== STEP 4: Apply caps and update UI ==========
    let projectedTotal = 0;
    let weightedRisk = 0;
    let capacityWarnings = [];

    gameState.streams.forEach(stream => {
        let projectedValue = projectedValues[stream.id];

        // Apply cap if stream has a maximum value
        const atCap = stream.maxValue && projectedValue > stream.maxValue;
        if (atCap) {
            projectedValue = stream.maxValue;
        }

        projectedTotal += projectedValue;

        // Update stream projected display
        const projectedEl = document.getElementById(`projected-${stream.id}`);
        if (projectedEl) {
            const cascadeBonus = cascadeBonuses[stream.id] || 0;
            if (atCap) {
                projectedEl.innerHTML = `→ ${formatShortCurrency(projectedValue)} <span class="cap-badge">capped</span>`;
                projectedEl.classList.add('at-cap');
            } else if (cascadeBonus > 100000) {
                // Show cascade bonus inline
                projectedEl.innerHTML = `→ ${formatShortCurrency(projectedValue)} <span style="color:#059669;font-size:0.75rem;">(+${formatShortCurrency(cascadeBonus)} cascade)</span>`;
                projectedEl.classList.remove('at-cap');
            } else {
                projectedEl.innerHTML = `→ ${formatShortCurrency(projectedValue)}`;
                projectedEl.classList.remove('at-cap');
            }
        }

        // Calculate weighted risk
        weightedRisk += stream.riskFactor * (stream.focus / 100);

        // Track capacity warnings
        if (stream.maxValue) {
            const projectedCapacity = projectedValue / stream.maxValue;
            if (projectedCapacity >= 0.95) {
                capacityWarnings.push({
                    stream: stream.name,
                    status: atCap ? 'at ceiling' : 'near ceiling (' + Math.round(projectedCapacity * 100) + '%)',
                    atCap: atCap
                });
            }
        }
    });

    // ========== STEP 5: Update cascade panel UI ==========
    updateCascadePanel(cascadeDetails, totalCascadeBonus);

    // Show capacity alert if any streams approaching/at cap
    const capacityAlert = document.getElementById('capacity-alert');
    const capacityAlertText = document.getElementById('capacity-alert-text');
    if (capacityWarnings.length > 0) {
        const warnings = capacityWarnings.map(w => `<strong>${w.stream}</strong> ${w.status}`).join(', ');
        capacityAlertText.innerHTML = warnings + ' — growth limited by physical/contractual constraints';
        capacityAlert.classList.add('visible');
    } else {
        capacityAlert.classList.remove('visible');
    }

    // Update projection summary
    const growthPercent = ((projectedTotal - gameState.currentRevenue) / gameState.currentRevenue * 100).toFixed(0);
    document.getElementById('projected-revenue').textContent = formatShortCurrency(projectedTotal);
    document.getElementById('projected-growth').textContent = `+${growthPercent}%`;

    // Risk profile
    let riskLabel = 'Balanced';
    if (weightedRisk < 1) riskLabel = 'Conservative';
    else if (weightedRisk < 1.5) riskLabel = 'Moderate';
    else if (weightedRisk < 2) riskLabel = 'Balanced';
    else if (weightedRisk < 2.5) riskLabel = 'Aggressive';
    else riskLabel = 'Very Aggressive';
    document.getElementById('risk-profile').textContent = riskLabel;

    // Store cascade bonuses for confirmYear
    gameState.pendingCascadeBonuses = cascadeBonuses;
    gameState.pendingCascadeTotal = totalCascadeBonus;
}

// ============================================================================
// SECTION 5: ADD THIS NEW FUNCTION (after updateProjections)
// ============================================================================

function updateCascadePanel(cascadeDetails, totalBonus) {
    const panel = document.getElementById('cascade-panel');
    const content = document.getElementById('cascade-content');

    if (!panel || !content) return;

    if (cascadeDetails.length === 0 || totalBonus < 500000) {
        panel.style.display = 'none';
        return;
    }

    panel.style.display = 'block';

    let html = '<div class="cascade-flows">';

    cascadeDetails.forEach(detail => {
        const targetsHtml = detail.targets.map(t =>
            `<span class="cascade-target">${t.target} +${formatShortCurrency(t.bonus)}</span>`
        ).join(', ');

        html += `
            <div class="cascade-flow">
                <span class="cascade-source">${detail.source} (${detail.focus}%)</span>
                <span class="cascade-arrow">→</span>
                <span class="cascade-targets">${targetsHtml}</span>
            </div>
        `;
    });

    html += '</div>';

    html += `
        <div class="cascade-total">
            Total Ecosystem Bonus: <span class="cascade-total-value">+${formatShortCurrency(totalBonus)}</span>
        </div>
    `;

    content.innerHTML = html;
}

// ============================================================================
// SECTION 6: REPLACE confirmYear() FUNCTION (around line 1282)
// ============================================================================

function confirmYear() {
    const totalFocus = gameState.streams.reduce((sum, s) => sum + s.focus, 0);

    // Validation - must equal exactly 100%
    if (totalFocus !== 100) {
        alert(`Total focus must equal exactly 100%. Currently at ${totalFocus}%. Please adjust your allocation.`);
        return;
    }

    if (gameState.currentYear > 1 && !gameState.selectedEventChoice) {
        alert('Please select a response to the market event before proceeding.');
        return;
    }

    // ========== STEP 1: Calculate base growth ==========
    gameState.streams.forEach(stream => {
        const focusMultiplier = 0.5 + (stream.focus / 100);
        let effectiveGrowth = stream.baseGrowth * focusMultiplier;

        // Apply event effects
        if (gameState.currentYear > 1 && gameState.selectedEventChoice) {
            const event = gameState.events[gameState.currentYear];
            const choice = event.choices.find(c => c.id === gameState.selectedEventChoice);
            if (choice && choice.effects && choice.effects[stream.id]) {
                effectiveGrowth *= choice.effects[stream.id];
            }
        }

        stream.currentValue = stream.currentValue * (1 + effectiveGrowth);
    });

    // ========== STEP 2: Apply cascade bonuses (THE KEY ADDITION) ==========
    const cascadeBonuses = {};

    gameState.streams.forEach(sourceStream => {
        const sourceFocus = sourceStream.focus / 100;
        const sourceInvestment = sourceStream.currentValue * sourceFocus;

        if (cascadeEffects[sourceStream.id]) {
            Object.entries(cascadeEffects[sourceStream.id]).forEach(([targetId, multiplier]) => {
                if (!cascadeBonuses[targetId]) cascadeBonuses[targetId] = 0;
                cascadeBonuses[targetId] += sourceInvestment * multiplier * sourceFocus;
            });
        }
    });

    // Apply cascade bonuses to stream values
    gameState.streams.forEach(stream => {
        if (cascadeBonuses[stream.id]) {
            stream.currentValue += cascadeBonuses[stream.id];
        }

        // Apply cap if stream has a maximum value
        if (stream.maxValue && stream.currentValue > stream.maxValue) {
            stream.currentValue = stream.maxValue;
        }
    });

    // ========== STEP 3: Calculate new total revenue ==========
    let newRevenue = gameState.streams.reduce((sum, s) => sum + s.currentValue, 0);

    // Save year data (including cascade info)
    const totalCascade = Object.values(cascadeBonuses).reduce((sum, b) => sum + b, 0);
    gameState.yearlyData.push({
        year: gameState.currentYear,
        startRevenue: gameState.currentRevenue,
        endRevenue: newRevenue,
        cascadeBonus: totalCascade,
        focus: gameState.streams.map(s => ({ id: s.id, name: s.name, focus: s.focus })),
        eventChoice: gameState.selectedEventChoice
    });

    gameState.currentRevenue = newRevenue;
    gameState.revenueTrajectory.push(newRevenue);

    // Next year or results
    if (gameState.currentYear < 5) {
        renderYear(gameState.currentYear + 1);
    } else {
        showResults();
    }
}

// ============================================================================
// SECTION 7: UPDATE generateInsights() FUNCTION (around line 1394)
// Add these new insights about ecosystem strategy
// ============================================================================

function generateInsights(finalRevenue, avgRisk) {
    const insights = [];

    // Revenue-based insights
    if (finalRevenue >= 200000000) {
        insights.push('Excellent growth! You successfully grew revenue by over 100% through strategic ecosystem thinking.');
    } else if (finalRevenue >= 150000000) {
        insights.push('Good performance. Consider how investing in "ecosystem drivers" (ticketing, media) could amplify other streams.');
    } else {
        insights.push('Revenue growth was below target. Review how your focus allocation created (or missed) cascade effects.');
    }

    // ========== NEW: Ecosystem cascade insights ==========
    const totalCascade = gameState.yearlyData.reduce((sum, y) => sum + (y.cascadeBonus || 0), 0);

    if (totalCascade > 20000000) {
        insights.push(`Your ecosystem strategy generated +${formatShortCurrency(totalCascade)} in cascade effects over 5 years. This is strategic sports business thinking.`);
    } else if (totalCascade > 5000000) {
        insights.push(`Ecosystem effects contributed ${formatShortCurrency(totalCascade)} to your growth. Heavier investment in ticketing or media would amplify this further.`);
    } else {
        insights.push('Minimal ecosystem cascade effects. Spreading focus too thin prevents the amplification that comes from concentrated strategic investment.');
    }

    // Analyze ticketing focus (ecosystem driver)
    const avgTicketingFocus = gameState.yearlyData.reduce((sum, y) => {
        const ticketing = y.focus.find(f => f.id === 'ticketing');
        return sum + (ticketing ? ticketing.focus : 0);
    }, 0) / gameState.yearlyData.length;

    if (avgTicketingFocus >= 30) {
        insights.push('Strong ticketing/fan experience investment created cascade effects across merchandise, betting, and media—like the Connor McDavid ecosystem amplification from Module 3.');
    }

    // Analyze betting focus
    const avgBettingFocus = gameState.yearlyData.reduce((sum, y) => {
        const betting = y.focus.find(f => f.id === 'betting');
        return sum + (betting ? betting.focus : 0);
    }, 0) / gameState.yearlyData.length;

    if (avgBettingFocus > 40) {
        insights.push('Heavy betting focus delivered high direct growth but limited cascade effects. Betting is a "receiver" not a "driver" in the revenue ecosystem.');
    }

    // Risk analysis
    if (avgRisk > 2) {
        insights.push('Your high-risk strategy created volatility. Consider balancing growth with ecosystem stability.');
    } else if (avgRisk < 1.2) {
        insights.push('Your conservative approach minimized risk but may have limited ecosystem amplification potential.');
    }

    // Event analysis
    const recessionChoice = gameState.yearlyData.find(y => y.year === 4);
    if (recessionChoice) {
        if (recessionChoice.eventChoice === 'pivot') {
            insights.push('Pivoting to digital during the recession was a bold move that reshaped your revenue ecosystem.');
        } else if (recessionChoice.eventChoice === 'cut') {
            insights.push('Your defensive positioning during the recession preserved stability but limited ecosystem growth.');
        }
    }

    const insightsList = document.getElementById('insights-list');
    insightsList.innerHTML = '';
    insights.forEach(insight => {
        const li = document.createElement('li');
        li.textContent = insight;
        insightsList.appendChild(li);
    });
}

// ============================================================================
// SECTION 8: UPDATE exportResults() to include cascade data
// Add this to the export content (around line 1460)
// ============================================================================

/*
In exportResults(), add after YEARLY DECISIONS section:

content += `
ECOSYSTEM CASCADE ANALYSIS
──────────────────────────
`;
gameState.yearlyData.forEach(y => {
    if (y.cascadeBonus > 0) {
        content += `Year ${y.year}: +${formatCurrency(y.cascadeBonus)} from ecosystem effects\n`;
    }
});

const totalCascade = gameState.yearlyData.reduce((sum, y) => sum + (y.cascadeBonus || 0), 0);
content += `\nTotal 5-Year Cascade Value: ${formatCurrency(totalCascade)}\n`;
*/
