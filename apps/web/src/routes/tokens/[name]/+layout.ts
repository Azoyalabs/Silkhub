import type { LayoutLoad } from './$types';

export const load = (async () => {
	const tokenInfo = {
		name: 'My token name',
		symbol: 'symb',
		decimals: 18,
		supply: BigInt(10_000_000_000),
		logo: 'https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2FActive_Storage_2832_20240111_1049_zwmhrs_32c5cab549%2FActive_Storage_2832_20240111_1049_zwmhrs_32c5cab549.png&w=96&q=70'
	};

	const description = `
## Armenta dignus


Lorem markdownum et [ipse](http://ibit-si.org/), ut Chaonis Phoebo hac aestuat
tecta in terrae caelum se sonat rudis nondum. Prodigiosa uteri opus quae
haerent. Inde Aegides silvis nutrix factus orsa edo creditur Cenaeo munera bubo.
Ferrumque tamen: quae nec erat exercere, ducis commune vindicet rabidi animo
bellicus.
    
> Omnes tibi dedere removere; auras totum maris Quid, esse. Mansit
> [parantem](http://www.seu-sui.io/permandata.php)? Pennis Tyriis radicibus
> praecipue verba re equus! Cuncta unde circumsonat sinu discordia inde pressit
> quae. Nobis vel umbras quoniam ac corpus illos Iano, mora?
    
Fama caruit vocas et, hanc **iuvenum recurvo** sequimur in armis et ulterius
haec fuerat es! Est sed, *mersura qua nunc*, has resonare **ipse adest** aevoque
Nox perstas murmure. Exiguam inquit, humus magnus traicit effugere cortex iamque
mihi coeamus caper, patruo ima quaedam. Tanto cum imagine, facere [praecluditur
colla](http://www.suimodo.org/).
    
## Per flos ulmo deum membra benefacta
    
Iuventam illi, dux *at data*. Abscedit Actaeo et cedit meumque, est felix
missisque scopulos stagnum repugnat meritis non, cervina. Ignotum super
resupinus, urbemque transire conloquiumque fontibus de nullius, ad meruit vocis
astu non, iamque. Manet ad lateri fremit frustra dixit harundine colores Ceycis,
testatum cessit!
    
    var multiprocessing = storageKeywordsProgramming.direct.systrayMysqlUnix(
        hypermediaStick(56 + cdma, joystick), frequency.mca_image(storage(
        scraping_ssh), social));
    if (cache(2, operating_syntax)) {
        qwerty_widget = 46;
        rich(wysiwygCpm);
        ascii += overwrite_access;
    } else {
        station_mail_horizontal = 2 / cardVpi + interpreter;
        clipboardNodeUri += -3;
    }
    orientation_engine_led += dmaBaseband;
    var cmyk_reality_view = card(ripcording.mpeg_surge_virus(storage), 94,
        hypermedia_monitor) + 2;
    if (41 > 5 + cursor_disk) {
        ata *= flat_e(market) / icf;
        hdd_webmaster += speed(client_gpu_encoding(cameraInstallLaptop,
        card_alpha));
    } else {
        retinaInstallerCore = slashdot.proxyDvdDeprecated.namespace(5 - netbios,
        analyst, web_ring_static(vlb_soft, 3, speedPpp));
    }
    
Sum genuere Delos: ligatis et **talia fecitque perire** Tisiphone in feremus
Aurora carpentem te tempus ire equis quantumque. Fluxerunt fecit Vesta noster in
obituque saepe!
    
Adpulit praebetque aequoribus mater; cum vulnus versus. Quod lato tantaque
darentque **populari**, illo tractu corpora nequeunt, fixis, **dantem**. Morbi
tria tenebat quoniam nimios, cum me scalas rursus, est in *Eurypylique*.
Nepheleidos ire, *bicoloribus inter vates*.`;

	return {
		token: {
			info: tokenInfo,
			description: description
		}
	};
}) satisfies LayoutLoad;
