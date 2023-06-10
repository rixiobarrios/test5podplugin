sap.ui.define([
    "sap/ui/model/resource/ResourceModel",
    "sap/dm/dme/podfoundation/control/PropertyEditor"
], function (ResourceModel, PropertyEditor) {
    "use strict";
    
    var oFormContainer;

    return PropertyEditor.extend( "sap.custom.plugin.viewplugins.test5podplugin.test5podplugin.builder.PropertyEditor" ,{

		constructor: function(sId, mSettings){
			PropertyEditor.apply(this, arguments);
			
			this.setI18nKeyPrefix("customComponentListConfig.");
			this.setResourceBundleName("sap.custom.plugin.viewplugins.test5podplugin.test5podplugin.i18n.builder");
			this.setPluginResourceBundleName("sap.custom.plugin.viewplugins.test5podplugin.test5podplugin.i18n.i18n");
		},
		
		addPropertyEditorContent: function(oPropertyFormContainer){
			var oData = this.getPropertyData();
			
			this.addSwitch(oPropertyFormContainer, "backButtonVisible", oData);
			this.addSwitch(oPropertyFormContainer, "closeButtonVisible", oData);
						
			this.addInputField(oPropertyFormContainer, "title", oData);
			this.addInputField(oPropertyFormContainer, "text", oData);
			

            oFormContainer = oPropertyFormContainer;
		},
		
		getDefaultPropertyData: function(){
			return {
				"backButtonVisible": true,
				"closeButtonVisible": true,
                "title": "test5podplugin",
				"text": "test5podplugin"
                
			};
		}

	});
});