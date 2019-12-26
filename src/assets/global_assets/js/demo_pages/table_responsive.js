/* ------------------------------------------------------------------------------
 *
 *  # Responsive tables
 *
 *  Demo JS code for table_responsive.html page
 *
 * ---------------------------------------------------------------------------- */

function init_table() {
  if (!$().footable) {
    console.warn("Warning - footable.min.js is not loaded.");
    return;
  }

  // Initialize responsive functionality
  $(".table-togglable").footable();
}
