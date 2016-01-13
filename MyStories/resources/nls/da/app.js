﻿define(
	 ({
		header: {
			start: "start",
			searchStories: "Søg efter dine historier...",
			filter: "Filtrér",
			sort: "Sortering",
			sortColon: "Sortér:",
			numResults: "Resultater: {{NUM_RESULTS}}",
			sortBy: "Sortér efter",
			dateModified: "Dato for ændring",
			title: "Titel",
			type: "Type",
			views: "Visninger",
			errors: "Errors",
			filterBy: "Filtrér efter",
			filterItems: "Filtrér elementer",
			apps: "Apps",
			sharing: "Deling",
			clearAll: "Ryd alle",
			clearSearch: "Rydder søgning",
			logOut: "Log ud",
			mainQuote: "Historiefortælling er den stærkeste måde at formidle idéer til verden på i dag.",
			quoteSource: "Robert McKee",
			checkYourStories: "Kontrollér historier",
			createStory: "Opret historie",
			totalStories: "Samlet antal historier: {{NUM_STORIES}}",
			noIssues: "Alt er i orden",
			userStories: "Historier af {{USER_NAME}}",
			headerDisabledTooltip: "Vent venligst, mens vi udfører mirakler...",
			notOnTouch: "Ingen tilgængelige berøringsenheder",
		},
		deleteModal: {
			title: "Bekræft sletning",
			warningText: "Er du sikker på, at du vil slette denne historie? Du kan ikke gendanne den.",
			deleteText: "Slet",
			cancel: "Annullér"
		},
		loading: {
			loadingText: "Indlæser dine historier..."
		},
		cantFindStories: {
			whereAreStories: "Får du ikke vist din historie?",
			notSeeExplanation: "Mine historier vil kun vise historiekort, der er \"hosted\" i ArcGIS Online og oprettet med {{STORY_MAP_TOUR}}-, {{JOURNAL}}-, {{MAP_SERIES}}- og {{SWIPE_SPYGLASS}}-applikationerne. Se vores {{FAQ}} for at få yderligere oplysninger.",
			faq: "FAQ",
			followingStoriesToUpdate: "Følgende historier, der er oprettet med tidligere versioner af vores applikationer, skal opdateres, så de kan vises i Mine historier:",
			gettingStories: "Søger efter historier, der er oprettet med tidligere versioner af vores applikationer, og som bør opdateres...",
			title: "Titel",
			typeOfStoryMap: "Type",
			lastModified: "Senest ændret",
			allUpToDate: "Ingen historier, der er oprettet med tidligere versioner af vores applikationer, skal opdateres.",
			updateAll: "Opdatér alle",
			errorScanningForStories: "Der opstod en fejl under søgning efter dine historier.",
			close: "Luk",
			updates: "Opdateringer",
			updatingNumberOfNumber: "Opdaterer {{CURRENT_NUMBER}} af {{TOTAL}}",
			updatingNumberOfNumberAlt: "Opdaterer {{CURRENT_NUMBER}} / {{TOTAL}}",
			updateSucceeded: "Opdatering lykkedes!",
			reloadingStories: "Genindlæser dine historier...",
			errorUpdatingStories: "Der opstod en fejl under opdatering af dine historier.",
			partialUpdateMessage: "Historier blev opdateret med succes: {{NUM_UPDATED}}"
		},
		signIn: {
			signInTitle: "Log ind på Story Maps",
			signInTo: "Log ind med din eksisterende ArcGIS Online-konto på:",
			explanationOne: "Opret overbevisende historiekort for at fortælle dine historier.",
			explanationTwo: "Brug dine kort og data fra ArcGIS Online til dine historiekort.",
			explanationThree: "Administrér dine historiekort, og tjek status for deres indhold.",
			dontHaveAccount: "Har du ikke en ArcGIS Online-konto? Tilmeld dig en:",
			publicAccount: "Gratis ikke-kommerciel, offentlig konto",
			orgAccount: "Gratis ArcGIS-prøveabonnement",
			timeExpired: "Dit login er udløbet. Log ind igen for at fortsætte, hvor du slap.",
			apiDidntLoad: "Noget indlæses ikke korrekt. Prøv at opdatere siden.",
			needAccount: "Har du brug for en konto?",
			letsGo: "Lad os gå i gang!"
		},
		sharingLevel: {
			publicMessage: "Offentlig",
			privateMessage: "Privat",
			organization: "Organisation",
			changedSharing: "Har ændret delingsniveau.",
			unableToChange: "Kan ikke ændre deling.",
			partOfMap: "Dette element findes i et kort. Hvis du vil ændre delingsniveau, skal du ændre delingsniveauet for kortet.",
			storyPublicContentOrg: "Din historie er offentlig, så indholdet kan ikke udelukkende deles med din organisation",
			storyPublicContentPrivate: "Din historie er offentlig, så indholdet kan ikke være privat",
			mapOrg: "Hvis du deler kortet med din organisation, vil det ødelægge din historie",
			layerOrg: "Hvis du deler laget med din organisation, vil det ødelægge din historie",
			mapPrivate: "Hvis du gør kortet privat, vil det ødelægge din historie",
			layerPrivate: "Hvis du gør laget privat, vil det ødelægge din historie"
		},
		collectionList: {
			advocacy: "Støtte- og fokuskampagner",
			architecture: "Arkitektur og design",
			conservation: "Bevarelse og bæredygtighed",
			culture: "Kultur",
			destinations: "Rejsemål og turisme",
			disasters: "Katastrofer og genrejsning",
			economy: "Økonomi og udvikling",
			entertainment: "Underholdning",
			history: "Historik",
			infrastructure: "Infrastruktur",
			marketing: "Markedsføring",
			nature: "Natur og miljø",
			news: "Nyheder og begivenheder",
			oceans: "Oceans",
			parks: "Parker og rekreative områder",
			people: "Mennesker og samfund",
			planning: "Planlægning og analyse",
			publicArt: "Offentligt tilgængelig kunst",
			science: "Videnskab og teknologi",
			sport: "Sport",
			travelogues: "Rejsebeskrivelser"
		},
		types: {
			custom: "Brugerdefineret",
			notSpecified: "Type ikke angivet"
		},
		storyMap: {
			shared: "Delt",
			saveFailed: "Fejl ved lagring",
			numViews: "Visninger: {{NUM_VIEWS}}",
			editStory: "Redigér historie",
			viewLive: "Vis Live",
			preview: "Eksempel",
			deleteButton: "Slet",
			modified: "Ændret {{DATE}}",
			summary: "Summary",
			loading: "Loading...",
			collapse: "skjul",
			close: "luk",
			hide: "skjul",
			notAvailableWhenBroken: "Din historie indeholder problemer som vist nedenfor",
			cantBeDeleted: "Din historie har skrivebeskyttelse aktiveret, se elementoplysningssiden på ArcGIS Online for at deaktivere",
			shareDialog: {
				title: "Del din historie med verden!",
				notPublicWarning: "Din historie deles med din organisation. Kun medlemmer af din organisation kan se den.",
				embedStory: "Indlejr din historie",
				shortLink: "Kortlink",
				hideHeaderBar: "Skjul overskriftslinje",
				copied: "Kopieret",
				small: "lille",
				medium: "mellem",
				large: "stor",
				custom: "brugerdefineret",
				widthAbbreviation: "v",
				heightAbbreviation: "h",
				emptyDimension: "Angiv en dimension.",
				seeExample: "Få vist eksempel på din indlejring",
				removeHeader: "Skjul applikationsoverskrift"
			},
			maps: {
				unableRetrieveTitle: "Kan ikke hente kort",
				unableRetrieveDescription: "Vi kunne ikke hente kort til dette historiekort."
			},
			images: {
				unableRetrieveTitle: "Kan ikke hente billeder",
				unableRetrieveDescription: "Vi kunne ikke hente billeder til dette historiekort."
			},
			tags: {
				tags: "Nøgleord",
				collectionTags: "Emne",
				selectASubject: "Vælg et emne",
				save: "Gem",
				saved: "Gemt",
				errorSaving: "Fejl ved lagring",
				tagTip: "Tip: Nøgleord hjælper folk med at finde din historie på ArcGIS Online. Jo mere relevante nøgleordene er, jo højere vil synligheden være for dit arbejde."
			},
			submitToGallery: {
				gallerySubmission: "Story Maps-galleri",
				canSubmitIf: "Du kan nominere din historie til galleriet, hvis den indeholder følgende elementer:",
				hasOwnImage: "Brugerdefineret miniature",
				chosenSubject: "Et emne og nogle nøgleord",
				chosenSubjectAlt: "Et {{SUBJECT}} og nogle nøgleord",
				storyMapTopicSubject: "emne",
				sharedPublicly: "Deles offentligt",
				noBrokenContent: "ø_No issues____å",
				nominateToGallery: "Nominér til galleri",
				comingSoon: "Kommer snart!",
				submitted: "Sendt",
				errorSubmitting: "Fejl ved afsendelse",
				ourGallery: "Story Maps-galleriet",
				galleryTip: "{{THE_GALLERY}} er et vedligeholdt sæt historiekort, der viser nogle af de bedste eksempler. Hvis din historie bliver udvalgt, bliver den føjet til galleriet inden for 10 dage, efter at du har sendt den. På grund af mængden af nomineringer kan vi ikke garantere for, at din historie bliver føjet til galleriet."
			},
			placeholders: {
				noSummary: "Intet resumé, klik for at tilføjet et."
			},
			errors: {
				cantDeleteStory: "Kan ikke slette historie.",
				unableToFind: "Kunne ikke finde indhold",
				unableToRetrieve: "Vi kunne ikke hente indhold til dette historiekort."
			},
			socialSharing: {
				availableWhenPublic: "Denne indstilling vil være tilgængelig, når din historie er offentlig"
			},
			dialog: {
				back: "Tilbage",
				close: "Luk",
				cancel: "Annullér"
			},
			imagePicker: {
				changeDefault: "Skift standardbillede",
				changeImage: "Redigér miniaturebillede",
				uploadImage: "Overfør miniature",
				chooseImage: "Vælg miniature",
				chooseAnImage: "Vælg et billede",
				notInIEVersion: "Denne funktion er ikke tilgængelig i Internet Explorer {{VERSION_NUMBER}}.",
				or: "Eller",
				uploadAnImage: "Overfør et billede",
				supportedFileTypes: "Understøtter .png, .jpg, .gif",
				imageSizeMessage: "Dit billede skal være mindst 286 pixels bredt og 190 pixels højt.",
				minimumDimensions: "Minimum: 286 x 190px",
				imagesLoading: "Indlæser billeder…",
				noImages: "Denne historie indeholder ikke nogen billeder",
				errorLoading: "Kan ikke hente billederne i denne historie",
				clickBelowTip: "Klik på knappen nedenfor for at overføre et billede.",
				dragAndDrop: "Træk og slip",
				cropImage: "Beskær billede",
				saveImage: "Gem billede",
				save: "Gem",
				savingImage: "Gemmer dit billede...",
				saved: "Gemt!",
				errorSaving: "Kan ikke gemme dit billede.",
				skipAndCrop: "Spring over og beskær for mig",
				wrongFormat: "Denne filtype understøttes ikke.",
				noCropWarning: "Dette billede kan ikke beskæres, men du kan stadig gemme det som din historieminiature med billedets oprindelige dimensioner ({{WIDTH_PIXELS}} x {{HEIGHT_PIXELS}}px)."
			}
		},
		content: {
			media: {
				maps: "Kort",
				images: "Billeder",
				videos: "Videoer",
				webpages: "Websider",
				tags: "Nøgleord",
				gallery: "Galleri"
			},
			headers: {
				status: "Status",
				source: "Kilde",
				name: "Navn",
				shared: "Delt"
			},
			component: {
				mapTour: "Punktnummer",
				bullet: "Punkttegn",
				tab: "Fane:",
				accordion: "Sektion",
				mapJournal: "Sektion"
			},
			titleType: {
				mapTour: "Billedtekst",
				mapJournal: "URL",
				mapSeries: "URL"
			},
			actions: {
				viewMap: "Vis kort",
				editMap: "Redigér kort",
				fix: "Ret",
				viewLayer: "Vis lag"
			},
			contentType: {
				mainStage: "handlinger i hovedområdet",
				sidePanel: "beskrivelse"
			},
			notification: {
				refreshExplanation: "Kontrollér din historie igen",
				checking: "Kontrollerer...",
				foundSomeIssues: "Vi har fundet nogle problemer",
				noIssuesFound: "ingen problemer fundet",
				storyPublic: "Din historie er nu offentlig",
				storyOrg: "Din historie deles nu med din organisation",
				storyPrivate: "Din historie er nu privat",
				mapPublic: "Dit kort er nu offentligt",
				mapOrg: "Din kort deles nu med din organisation",
				mapPrivate: "Dit kort er nu privat",
				layerPublic: "Dit lag er nu offentligt",
				layerOrg: "Din lag deles nu med din organisation",
				layerPrivate: "Dit lag er nu privat",
				contentPublic: "Dit indhold er nu offentligt",
				contentOrg: "Din indhold deles nu med din organisation",
				contentPrivate: "Dit indhold er nu privat",
				storyAndContentPublic: "Din historie og dens indhold er nu offentligt",
				storyAndContentOrg: "Din historie og dens indhold deles nu med din organisation",
				storyAndContentPrivate: "Din historie og dens indhold er nu privat",
				shareBulkPrompt: "Vil du dele din histories indhold på denne måde?",
				layersPublic: "Nogle lag er også blevet delt offentligt",
				layersOrg: "Nogle lag er også blevet delt med din organisation",
				layersPrivate: "Nogle lag er også blevet gjort private",
				mapsPublic: "Nogle kort er også blevet delt offentligt",
				mapsOrg: "Nogle kort er også blevet delt med din organisation",
				mapsPrivate: "Nogle kort er også blevet gjort private",
				layersAndMapsPublic: "Nogle kort og lag er også blevet delt offentligt",
				layersAndMapsOrg: "Nogle kort og lag er også blevet delt med din organisation",
				layersAndMapsPrivate: "Nogle kort og lag er også blevet gjort private",
				yes: "Ja",
				no: "Nej",
				premiumPublicSuccess: "Dit premium-indhold er nu offentligt tilgængeligt",
				subscriptionPublicSuccess: "Dit abonnementindhold er nu offentligt tilgængeligt"
			},
			errors: {
				publicDisabled: "Offentlig deling er blevet deaktiveret af administratoren",
				noMapName: "Kunne ikke hente kortnavn",
				notPublic: "IKKE OFFENTLIGT",
				inaccessible: "UTILGÆNGELIGT",
				deleted: "SLETTET",
				cantAccessVideo: "Kunne få adgang til video",
				noStoriesFound: "Vi kunne ikke finde historiekort i dit indhold.",
				cantShowStories: "Kan ikke vise dine historiekort. Prøv igen senere.",
				consolationSearch: "Vi kunne ikke finde nogen historier.",
				notCompatibleWithBrowser : "Mine historier understøttes ikke i Internet Explorer før version {{VERSION_NUMBER}}.",
				pleaseUpdateBrowser: "Opdater din browser.",
				searchTip: "Prøv et forenkle det en smule.",
				consolationNoStories: "Velkommen til Mine historier!",
				noStoriesTip: "Tjek Apps-siden, når du skal oprette dit første historiekort.",
				letsGo: "Lad os gå i gang!",
				cantChangeSharingLevel: "Kan ikke ændre delingsniveau.",
				cantChangeSharingLevels: "Kan ikke ændre delingsniveauer",
				errorUpdatingTitle: "Fejl ved opdatering af titel",
				errorUpdatingSummary: "Fejl ved opdatering af resumé",
				noEmptyTitle: "Titel kan ikke være tom",
				cantUpdatePremiumContent: "Kan ikke opdatere premium-indhold",
				cantUpdateSubscriptionContent: "Kan ikke opdatere abonnementindhold",
				createFirstStory: "Opret min første historie"
			},
			tooltipErrors: {
				mapHasBeenDeleted: "Kort er blevet slettet",
				layerHasBeenDeleted: "Lag er blevet slettet",
				mapIsInaccessible: "Kort er utilgængeligt",
				layerIsInaccessible: "Lag er utilgængeligt",
				mapNotYoursNotAccessible: "Kortet ejes af en anden og er utilgængeligt",
				layerServiceOkItemNot: "Laget blev tilføjet som et element, der er slettet eller utilgængeligt",
				layerNotYoursNotAccessible: "Laget ejes af en anden og er utilgængeligt",
				mapOthersSharedBelowLevel: "Kortet ejes af ikke dig og er ikke offentligt",
				layerOthersSharedBelowLevel: "Laget ejes af ikke dig og er ikke offentligt",
				noMapNoDetails: "Uden kortoplysningerne kan vi ikke fortælle dig noget om lagene",
				mapIsPrivate: "Kortet er privat",
				mapIsOrg: "Kortet deles kun med din organisation",
				layerIsPrivate: "Laget er privat",
				layerIsOrg: "Laget deles kun med din organisation",
				imageInaccessible: "Dette billede er utilgængeligt",
				videoInaccessible: "Denne video er utilgængelig",
				webpageInaccessible: "Denne webside er utilgængelig",
				layerSecureService: "Laget er en sikker tjeneste",
				mapSecureService: "Kortet er en sikker tjeneste",
				layerConsumesCredits: "Laget er premium-indhold og forbruger credits",
				layerSubscriptionContent: "Laget er abonnementindhold",
				mapConsumesCredits: "Kortet er premium-indhold og forbruger credits",
				mapSubscriptionContent: "Kortet er abonnementindhold"
			},
			tooltipWarnings: {
				cantScanThisTypeAlt: "Vi kan ikke kontrollere denne type lag",
				cantScanThisType: "Laget er ikke en type lag, som vi kan kontrollere",
				webpageNotScanned: "Websider kontrolleres ikke for problemer"
			},
			scanningErrors: {
				deletedMap: "Slettet indhold",
				inaccessibleMap: "Utilgængeligt kortindhold",
				notYoursNotAccessible: "Indhold, der ikke ejes af dig og ikke er offentligt",
				serviceOkItemNot: "Fungerende lag, men med utilgængelige elementer",
				someContentNotPublic: "Indhold, der ikke deles offentligt",
				someContentPrivate: "Privat indhold",
				othersSharedBelowLevel: "Indhold, der ikke ejes af dig og ikke er offentligt",
				premiumContent: "Premium-indhold",
				subscriptionContent: "Abonnementindhold",
				secureService: "Sikre tjenester",
				inaccessibleImage: "Utilgængelige billeder",
				inaccessibleVideo: "Utilgængelige videoer",
				inaccessibleWebpage: "Utilgængelige websider"
			},
			scanningErrorTips: {
				deletedMapTip: "ø_Tip: Edit your web map and remove the broken content, or remove the web map from your story_____________________________å.",
				inaccessibleMapTip: "ø_Tip: Edit your web map and remove the broken content, or remove the web map from your story_____________________________å.",
				notYoursNotAccessibleTip: "ø_Tip: Edit your web map and remove the layer, or remove the web map from your story__________________________å.",
				serviceOkItemNotTip: "Lagene blev tilføjet som elementer, der er utilgængelige eller slettede. Lagene fungerer, men dette kan påvirke dit kort (pop-ups, symboler).",
				ignore: "Ignore",
				fix: "Ret",
				clickToShareOrg: "Klik på knappen for at dele alt dette indhold med din organisation, eller redigér hvert element manuelt ved at klikke på dets delingsknapper.",
				clickToSharePublic: "Klik på knappen for at dele alt dette indhold offentligt, eller redigér hvert element manuelt ved at klikke på dets delingsknapper.",
				shareOrg: "Del med din organisation",
				sharePublicly: "Del offentligt",
				othersSharedBelowLevelTip: "Tip: Noget af din histories indhold ejes af {{USER_NAME}}, og andre, som ser din historie, kan muligvis ikke se det pågældende indhold.",
				secureServiceTip: "Tip: Fjern den sikre tjeneste fra din historie, eller følg den fremgangsmåde, der beskrives {{HERE}}.",
				blogArticle: "her",
				premiumContentTip: "Din historie indeholder premium-indhold, der vil forbruge {{CREDITS}}, når det bliver gjort offentligt tilgængeligt. Gør din historie offentligt tilgængelig, og fortsæt, eller fjern lagene fra din historie.",
				premiumContentPublicTip: "Din historie indeholder premium-indhold, der vil forbruge {{CREDITS}}, når det er offentligt tilgængeligt. Bekræft, at disse lag skal være offentligt tilgængelige, eller fjern lagene fra din historie.",
				subscriptionContentTip: "Din historie indeholder abonnementindhold, der som standard ikke er offentligt tilgængeligt. Bekræft, at du vil gøre i disse lag offentligt tilgængelige (det vil ikke forbruge nogen credits), eller fjern lagene fra din historie.",
				agolCredits: "ArcGIS Online-credits",
				credits: "credits",
				makePublic: "Gør offentligt tilgængeligt",
				confirm: "Bekræft",
				inaccessibleImageTip: "Tip: Stil det manglende billede til rådighed, eller fjern reference til det.",
				inaccessibleVideoTip: "Tip: Stil den manglende video til rådighed, eller fjern reference til den.",
				inaccessibleWebpageTip: "Tip: Stil den manglende webside til rådighed, eller fjern reference til den."
			},
			removeLayer: {
				title: "Løs problemet med lagene",
				layersWithIssue: "Lag med dette problem: {{NUM_WITH_ISSUE}}",
				issueExplanation: "Laget {{LAYER_NAME}} blev tilføjet som et element, der er utilgængeligt eller slettet. Laget fungerer, men dette kan påvirke dit kort (pop-ups, symboler). Vi kan ikke afgøre, om elementet var vigtigt for din historie.",
				issueSolution: "For at løse problemet kan du redigere kortet, fjerne laget og derefter føje laget til kortet igen ved hjælp af følgende URL:",
				editMap: "Redigér dit kort",
				clickBelowWhenDone: "Når du er færdig med at redigere, skal du klikke på knappen nedenfor:",
				rescanAndClose: "Søg igen og luk"
			},
			info: {
				ownedBy: "Dette element ejes af {{USER_NAME}}",
				unknownUser: "en anden",
				untitledSection: "(Sektion uden titel)",
				introRecord: "Introduktion"
			},
			layers: {
				layersHeader: "Lag",
				noLayers: "(Ingen lag)",
				basemapParens: "(baggrundskort)"
			},
			images: {
				thumbnails: "Miniaturer",
				thumbnail: "Miniaturebillede",
				thumbnailParens: "(miniature)"
			},
			general: {
				noTitle: "(ingen titel)",
				loading: "Loading..."
			}
		},
		infographics: {
			mapJournal: {
				firstTitle: "sektioner",
				secondTitle: "typografi",
				secondValueA: "sidepanel",
				secondValueB: "flydende panel",
				thirdTitle: "kort"
			},
			mapTour: {
				firstTitle: "turpunkter",
				secondTitle: "typografi",
				secondValueA: "Integreret",
				secondValueB: "tre-panel",
				thirdTitle: "baggrundskort",
				thirdValueLoading: "Loading...",
				thirdValueUnknown: "ukendt"
			},
			mapSeries: {
				firstTitleA: "punkttegn",
				firstTitleB: "sektioner",
				firstTitleC: "faner",
				secondTitle: "typografi",
				secondValueA: "punkttegn",
				secondValueB: "sideakkordion",
				secondValueC: "faneblade",
				thirdTitle: "kort"
			},
			swipeSpyglass: {
				firstTitle: "interessepunkter",
				secondTitle: "typografi",
				secondValueA: "swipe",
				secondValueB: "kikkert",
				thirdTitle: "kort"
			}
		},
		progress: {
			checkingStories: "Kontrollerer din historie for problemer...",
			stop: "Stop",
			exit: "Afslut",
			dismiss: "Afvis",
			done: "Færdig.",
			noStoriesWithIssuesLower: "Ingen problemer fundet!",
			storiesErrorFree: "Dine historier ser ud til at være fejlfri",
			scanAllError: "Kan ikke scanne -- vi kunne ikke hente en eller flere af dine historier",
			scanProgress: "{{NUM_SCANNED}} af {{NUM_TOTAL}}",
			scanStopped: "Historier scannet: {{NUM_SCANNED}}, Historier med problemer: {{ISSUE_STORIES}}",
			storiesWithIssues: "Historier med problemer: {{NUM_STORIES}}"
		}
    })
);
