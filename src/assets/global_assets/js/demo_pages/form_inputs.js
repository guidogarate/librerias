/* ------------------------------------------------------------------------------
 *
 *  # Basic form inputs
 *
 *  Demo JS code for form_inputs_basic.html page
 *
 * ---------------------------------------------------------------------------- */

// Uniform
function init_input() {
  if (!$().uniform) {
    console.warn("Warning - uniform.min.js is not loaded.");
    return;
  }

  // File input
  $(".form-control-uniform").uniform();

  // Custom select
  $(".form-control-uniform-custom").uniform({
    fileButtonClass: "action btn bg-blue",
    selectClass: "uniform-select bg-pink-400 border-pink-400"
  });
}
