function showTab(tabIndex) {
    // Hide all tab panels
    var tabPanels = document.querySelectorAll('.react-tabs__tab-panel');
    tabPanels.forEach(function(panel) {
        panel.classList.remove('react-tabs__tab-panel--selected');
    });

    // Show the selected tab panel
    var selectedPanel = document.getElementById('panel:r0:' + tabIndex);
    if (selectedPanel) {
        selectedPanel.classList.add('react-tabs__tab-panel--selected');
    }

    // Hide the content of the previously selected tab
    var previouslySelectedPanel = document.querySelector('.react-tabs__tab-panel--selected:not(#panel:r0:' + tabIndex + ')');
    if (previouslySelectedPanel) {
        previouslySelectedPanel.classList.remove('react-tabs__tab-panel--selected');
    }

    // Update the aria-selected attribute for tabs
    var tabs = document.querySelectorAll('.react-tabs__tab');
    tabs.forEach(function(tab, index) {
        tab.setAttribute('aria-selected', index === tabIndex ? 'true' : 'false');
    });
}
