import 'popper.js'
import $ from 'jquery'
import bootstrap from 'ootstrap'

$(() => {
  $('#resultUID').text(bootstrap.Util.getUID('bs'))
  $('[data-toggle="tooltip"]').tooltip()
})
