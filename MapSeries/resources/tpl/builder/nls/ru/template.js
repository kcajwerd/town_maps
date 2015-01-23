﻿define(
	 ({
		builder: {
			layouts: {
				tabTitle: "Ж_Tabbed_Я",
				tabDescr: "Ж_Present maps and other content using tabs with an optional panel for descriptive text_Я.",
				sideTitle: "Ж_Side Accordion_Я",
				sideDescr: "Ж_Present maps and other content using an expandable control that includes descriptive text_Я.",
				bulletTitle: "Ж_Bulleted_Я",
				bulletDescr: "Ж_Present maps and other content using bullets with an optional panel for descriptive text_Я."
			},
			common: {
				lblStatus1: "Ж_Published_Я",
				lblStatus3: "Ж_Hidden_Я"
			},
			settingsLayoutOptions: {
				title: "Ж_Layout options_Я",
				lblDescription: "Ж_Description_Я",
				lblLegend: "Ж_Legend placement_Я",
				tooltipLegend: "Ж_Choose where you want the map legend to be displayed. You can turn the legend on for any map when you add or configure it_Я.",
				lblDropdown: "Ж_Dropdown_Я",
				lblBelowDesc: "Ж_Below the description_Я",
				lblOnPanel: "Ж_As a panel_Я",
				lblPanelDescAndLegend: "Ж_Description and legend Panel_Я",
				lblPanelDescAndOrLegend: "Ж_Description and/or legend Panel_Я",
				lblPanelDesc: "Ж_Description Panel_Я",
				lblPanelLegend: "Ж_Legend Panel_Я",
				lblPanelAccordion: "Ж_Accordion Panel_Я",
				cfgLeft: "Ж_Left_Я",
				cfgRight: "Ж_Right_Я",
				cfgSmall: "Ж_Small_Я",
				cfgMedium: "Ж_Medium_Я",
				cfgLarge: "Ж_Large_Я",
				lblNumbering: "Ж_Entry numbering_Я",
				lblReverse: "Ж_Reverse entry numbering_Я"
			},
			settingsMapOptions: {
				title: "Ж_Map options_Я",
				lblOverview: "Ж_Overview Map_Я",
				tooltipOverview: "Ж_Display a small overview map along with the main map_Я.",
				lblLocate: "Ж_Locate button_Я",
				tooltipLocate: "Ж_This functionality is supported on most mobile device and desktop browsers (Internet Explorer 9)_Я.",
				lblGeocoder: "Ж_Address or Place Finder_Я",
				tooltipGeocoder: "Ж_Allow your users to find addresses and places on your maps_Я.",
				lblSync: "Ж_Synchronize map locations_Я",
				tooltipSync: "Ж_When enabled, the initial location of the first map in your series will be applied to all the maps, and navigation by users in any map will be reflected in all maps. Disable for each map's location to remain independent_Я."
			},
			initPopup: {
				title: "Ж_Welcome to_Я"
			},
			addEditPopup: {
				lblAdd: "Ж_Add_Я",
				lblEdit: "Ж_Edit_Я",
				disabled: "Ж_Add Entry is disabled because the maximum number of allowed sections has been reached_Я.",
				titleAdd: "Ж_Add Entry_Я",
				titleEdit: "Ж_Edit Entry_Я",
				stepMainStageNextTooltip: "Ж_Enter the Entry title and content_Я",
				titlePlaceholder: "Ж_Entry title_Я..."
			},
			textEditor: {
				placeholder1: "Ж_Add text, links, and small graphics here_Я.",
				placeholder2: "Ж_If left blank the panel will be hidden_Я."
			},
			organizePopup: {
				title: "Ж_Organize_Я",
				lblHeader: "Ж_Drag and drop entries to organize your series_Я.",
				lblColTitle: "Ж_Title_Я",
				lblColStatus: "Ж_Status_Я",
				btnApplyWarning: "Ж_Confirm deletion of %NB% entries_Я",
				deleteTooltip: "Ж_Delete_Я",
				firstSectionExplain: "Ж_(The home section cannot be moved)_Я"
			},
			help: {
				lblHelp: "Ж_Help_Я",
				lblAdd: "Ж_Add_Я",
				lblSettings: "Ж_Settings_Я",
				lblOrga: "Ж_Organize_Я",
				lblEdit: "Ж_Edits_Я",
				lblPublish: "Ж_Share_Я",
				lblTips: "Ж_Tips_Я",
				lblMore: "Ж_Want more_Я?",
				lblLink: "Ж_Visit the Esri Story Maps website_Я.",
				content1Div1: "Ж_To create your %TPL_NAME%, use the Add button to add each map or other content into the layout. The other content can include images, videos or embedded web pages or code. For example you might want your readers to see an introductory image or video when they first launch your  %TPL_NAME%, before they move on to explore your maps_Я.",
				content1Div2: "Ж_When you click the Add button a dialog will appear that lets you choose and configure the map or other content you want to add. For example you can specify the location you want the map to show, enable its legend, etc_Я.",
				content2Div1: "Ж_The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, choose where the map legend will appear, etc_Я.",
				content2Div2: "Ж_You can also replace the Esri logo in the header of your %TPL_NAME% with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information_Я.",
				content3Div1: "Ж_The Organize dialog lets you manage your %TPL_NAME%. In this dialog you can change the order of the series by dragging and dropping_Я.",
				content3Div2: "Ж_You can also delete content or hide it. Hiding is useful if you are preparing new content that isn't ready to be included in your story map yet_Я.",
				content4Div1: "Ж_Found a mistake or want to change your material? No worries. Look for the edit icon throughout the app to make changes to your content. Youâ€™ll use the edit functions many times as you develop your %TPL_NAME%_Я!",
				content5Div1: "Ж_When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it_Я.",
				content5Div2: "Ж_Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it_Я.",
				content6Div1: "Ж_By default the maps in a series are synchronized to show the same location. This means that the location shown in the first map will be automatically applied to all the other maps, and that if a reader zooms or pans to a different location in the map they are currently looking at, this will also be applied to the other maps_Я.",
				content6Div2: "Ж_For example if your series shows different thematic data for a city, a reader can zoom to their neighborhood and then simply switch between the tabs to see the maps for that area_Я.",
				content6Div3: "Ж_To disable location synchronization, go to the Settings dialog and uncheck that setting in the Map Options tab_Я.",
				content6AltDiv1: "Ж_By default the maps location are synchronized. Disabling synchronization allows each map to display a different location_Я.",
				content6AltDiv2: "Ж_Synchronization ON_Я",
				content6AltDiv3: "Ж_Synchronization OFF_Я",
				content6AltDiv4: "Ж_To disable synchronization, go to Settings > Map Options and uncheck \"Synchronize map locations\"_Я."
			},
			landing: {
				lblAdd: "Ж_What do you want to call your %LAYOUT_TITLE% Map Series_Я?",
				phAdd: "Ж_Enter your title_Я...",
				lblOR: "Ж_Or_Я",
				lblHelp: "Ж_Take a Tour_Я"
			}
        }
    })
);
