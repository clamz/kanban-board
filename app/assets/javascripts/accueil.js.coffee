# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$ ->
  $('#projects-list').select2
    placeholder: "Sélectionner un projet"
    width: "resolve"
    allowClear: true
  .on
    "change": (e) ->
      location.href= project_path({id: e.val})