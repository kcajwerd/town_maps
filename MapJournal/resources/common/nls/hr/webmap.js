﻿define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Karta",
				lblLocation: "Lokacija",
				lblContent: "Sadržaj",
				lblPopup: "Skočni prozor",
				lblControls: "Dodatni sadržaji",
				lblOverview: "Pregledna karta",
				lblLegend: "Legenda",
				lblGeocoder: "Tražilo adrese ili mjesta",
				tooltipGeocoder: "Omogućite korisnicima da pronađu adrese i mjesta na vašim kartama.",
				loadingTitle: "Učitavanje naslova",
				entry: "Unos",
				entries: "Unosi",
				section: "Odjeljak",
				sections: "Odjeljci",
				and: "i",
				action: "Radnja u odjeljku",
				actions: "Radnja u odjeljcima",
				originalWebmap: "Karta koja se upotrijebila za objavu predloška %TPL_NAME%",
				browseMaps: "Odaberi kartu",
				createMap: "Stvori kartu",
				current: "Trenutačna karta",
				select: "Odaberi ili stvori kartu",
				newMap: "Novo odabrana karta",
				newCreatedMap: "Novo stvorena karta",
				webmapDefault: "Zadana karta",
				customCfg: "Prilagođena konfiguracija",
				tooltipLocation: "Definirajte lokaciju koja će se prikazati na ovoj karti.",
				tooltipContent: "Definirajte vidljive slojeve.",
				tooltipPopup: "Izaberite skočni prozor koji će se otvoriti kad se prikaže ova karta.",
				tooltipOverview: "Prikažite malu preglednu kartu uz glavnu kartu.",
				tooltipLegend: "Prikažite legendu karte na karti, korisna je kad karta ima puno slojeva i simbola.",
				mapCfgInvite: "Upotrijebite ove kontrole da biste konfigurirali kartu",
				lblLocationAlt: "Naslijeđeno s prve karte",
				tooltipLocationAlt: "Lokacija ove karte sinkronizirana je s prvom kartom iz serije. Da biste promijenili tu postavku za seriju, idite u Postavke > Opcije karte."
			},
			configure: {
				btnReset: "Vrati izvorno",
				btnCancel: "Odustani",
				tocTitle: "Sadržaj karte",
				tocExplain: "Odaberite koji će se slojevi prikazati.",
				tocNoData: "Nijedan se sloj ne može konfigurirati.",
				tocSave: "Spremi sadržaj karte",
				extentTitle: "Lokacija karte",
				extentExplain: "Krećite se po karti i uvećajte je kako biste utvrdili kako će izgledati vašim čitateljima.",
				extentSave: "Spremi lokaciju karte",
				popupTitle: "Skočni prozor karte",
				popupExplain: "Kliknite na geoobjekt da bi se otvorio skočni prozor koji želite prikazati.",
				popupSave: "Spremi konfiguraciju skočnog prozora",
				hintNavigation: "Onemogućena je navigacija kartom."
			},
			editor: {
				loading: "Pričekajte dok se ne učita uređivač karte",
				newTitle: "Stvori novu kartu",
				editTitle: "Uredi kartu",
				titleLbl: "Naziv",
				titlePh: "Naslov karte...",
				folderLbl: "Karta će se stvoriti u istoj mapi kao i priča.",
				creating: "Stvaranje karte",
				saving: "Spremanje karte",
				success: "Karta spremljena",
				successCreate: "Karta stvorena",
				cancelTitle: "Želite li odbaciti nespremljene promjene?",
				errorDuplicate: "Već imate kartu s tim naslovom",
				errorCreate: "Nije moguće stvoriti kartu. Pokušajte ponovno.",
				errorSave: "Nije moguće spremiti kartu. Pokušajte ponovno.",
				notavailable1: "Nažalost, stvaranje ili uređivanje karte nije podržano u pregledniku Firefox zbog tehničkog ograničenja. Možete izraditi svoju priču s pomoću drugog web-preglednika ili upotrijebiti sljedeće zaobilazno rješenje.",
				notavailable2: "Nažalost, stvaranje ili uređivanje karte nije podržano jer se aplikacija za kartu s pričom ne nalazi u %PRODUCT%. Obratite se administratoru za ArcGIS za više informacija.",
				notavailable3: "Nažalost, stvaranje ili uređivanje karte nije podržano u ovoj verziji Portal for ArcGIS (potrebna je verzija 10.4 ili novija). Obratite se administratoru za ArcGIS za više informacija.",
				notavailable4: "Možete stvoriti kartu s pomoću %MV%, a zatim se vratiti ovdje kako biste je dodali svojoj priči.",
				notavailable5: "Možete urediti kartu s pomoću %MV%, a zatim se vratiti ovdje i %apply% da biste vidjeli svoje promjene.",
				notavailable6: "preglednik karte",
				notavailable7: "ponovno učitaj kartu"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Moja organizacija",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Moj sadržaj",
					favoritesLabel: "Moji favoriti"
				},
				title: "Odaberi kartu",
				searchTitle: "Pretraži",
				ok: "U redu",
				cancel: "Odustani",
				placeholder: "Unesite pojam za pretraživanje ili ID web-karte..."
			}
		}
	})
);
