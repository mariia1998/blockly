Blockly.Blocks['lightswitch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn")
        .appendField(new Blockly.FieldDropdown([["red","R"], ["yellow","Y"], ["green","G"]]), "lightcolor")
        .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"]]), "switch");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("http://www.youtube.com");
  }
} ;

Blockly.JavaScript['lightswitch'] = function(block) {
  var dropdown_lightcolor = block.getFieldValue('lightcolor');
  var dropdown_switch = block.getFieldValue('switch');
  // TODO: Assemble JavaScript into code variable.
  if (dropdown_switch=='on' && dropdown_lightcolor=='R') {
    var code = "document.getElementById('circle').style.backgroundColor='red'";

  }
  if (dropdown_switch=='on' && dropdown_lightcolor=='Y') {
    var code = "document.getElementById('circle').style.backgroundColor='yellow'";

  }
  if (dropdown_switch=='on' && dropdown_lightcolor=='G') {
    var code = "document.getElementById('circle').style.backgroundColor='green'";

  }

  if (dropdown_switch=='off') {
    var code = "document.getElementById('circle').style.backgroundColor='white'";

  }
  return code;
}
