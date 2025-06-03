var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sleman_1 = new ol.format.GeoJSON();
var features_Sleman_1 = format_Sleman_1.readFeatures(json_Sleman_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sleman_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sleman_1.addFeatures(features_Sleman_1);
var lyr_Sleman_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sleman_1, 
                style: style_Sleman_1,
                popuplayertitle: 'Sleman',
                interactive: true,
    title: 'Sleman<br />\
    <img src="styles/legend/Sleman_1_0.png" /> Berbah<br />\
    <img src="styles/legend/Sleman_1_1.png" /> Cangkringan<br />\
    <img src="styles/legend/Sleman_1_2.png" /> Depok<br />\
    <img src="styles/legend/Sleman_1_3.png" /> Gamping<br />\
    <img src="styles/legend/Sleman_1_4.png" /> Godean<br />\
    <img src="styles/legend/Sleman_1_5.png" /> Kalasan<br />\
    <img src="styles/legend/Sleman_1_6.png" /> Minggir<br />\
    <img src="styles/legend/Sleman_1_7.png" /> Mlati<br />\
    <img src="styles/legend/Sleman_1_8.png" /> Moyudan<br />\
    <img src="styles/legend/Sleman_1_9.png" /> Ngaglik<br />\
    <img src="styles/legend/Sleman_1_10.png" /> Ngemplak<br />\
    <img src="styles/legend/Sleman_1_11.png" /> Pakem<br />\
    <img src="styles/legend/Sleman_1_12.png" /> Prambanan<br />\
    <img src="styles/legend/Sleman_1_13.png" /> Seyegan<br />\
    <img src="styles/legend/Sleman_1_14.png" /> Sleman<br />\
    <img src="styles/legend/Sleman_1_15.png" /> Tempel<br />\
    <img src="styles/legend/Sleman_1_16.png" /> Turi<br />\
    <img src="styles/legend/Sleman_1_17.png" /> <br />' });
var format_Area_Strategis_2 = new ol.format.GeoJSON();
var features_Area_Strategis_2 = format_Area_Strategis_2.readFeatures(json_Area_Strategis_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_Strategis_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_Strategis_2.addFeatures(features_Area_Strategis_2);
var lyr_Area_Strategis_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_Strategis_2, 
                style: style_Area_Strategis_2,
                popuplayertitle: 'Area_Strategis',
                interactive: true,
    title: 'Area_Strategis<br />\
    <img src="styles/legend/Area_Strategis_2_0.png" /> Sangat Dekat<br />\
    <img src="styles/legend/Area_Strategis_2_1.png" /> Dekat<br />\
    <img src="styles/legend/Area_Strategis_2_2.png" /> Sedang<br />\
    <img src="styles/legend/Area_Strategis_2_3.png" /> Jauh<br />\
    <img src="styles/legend/Area_Strategis_2_4.png" /> Sangat Jauh<br />\
    <img src="styles/legend/Area_Strategis_2_5.png" /> <br />' });
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_3.png" /> Jalan'
            });
var format_SMA_4 = new ol.format.GeoJSON();
var features_SMA_4 = format_SMA_4.readFeatures(json_SMA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMA_4.addFeatures(features_SMA_4);
cluster_SMA_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_SMA_4
});
var lyr_SMA_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SMA_4, 
                style: style_SMA_4,
                popuplayertitle: 'SMA',
                interactive: true,
    title: 'SMA<br />\
    <img src="styles/legend/SMA_4_0.png" /> Negeri<br />\
    <img src="styles/legend/SMA_4_1.png" /> Swasta<br />\
    <img src="styles/legend/SMA_4_2.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Sleman_1.setVisible(true);lyr_Area_Strategis_2.setVisible(true);lyr_Jalan_3.setVisible(true);lyr_SMA_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Sleman_1,lyr_Area_Strategis_2,lyr_Jalan_3,lyr_SMA_4];
lyr_Sleman_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'namobj': 'namobj', 'srs_id': 'srs_id', 'wadmkc': 'wadmkc', 'wadmkd': 'wadmkd', 'wadmkk': 'wadmkk', 'wadmpr': 'wadmpr', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'laki_laki': 'laki_laki', 'perempuan': 'perempuan', 'jml_pddk': 'jml_pddk', 'metadata': 'metadata', 'simbologi': 'simbologi', });
lyr_Area_Strategis_2.set('fieldAliases', {'wadmkc': 'wadmkc', 'wadmkd': 'wadmkd', 'wadmkk': 'wadmkk', 'wadmpr': 'wadmpr', 'Buffer': 'Buffer', 'Keterangan': 'Keterangan', });
lyr_Jalan_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', });
lyr_SMA_4.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'kecamatan': 'kecamatan', 'desa': 'desa', 'dusun': 'dusun', 'sumber': 'sumber', 'nama_satua': 'nama_satua', 'npsn': 'npsn', 'bentuk_pen': 'bentuk_pen', 'status_sek': 'status_sek', 'jumlah_rom': 'jumlah_rom', 'siswa_l': 'siswa_l', 'siswa_p': 'siswa_p', 'siswa_tota': 'siswa_tota', 'skl_plyan': 'skl_plyan', 'namobj': 'namobj', });
lyr_Sleman_1.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'TextEdit', 'namobj': 'TextEdit', 'srs_id': 'TextEdit', 'wadmkc': 'TextEdit', 'wadmkd': 'TextEdit', 'wadmkk': 'TextEdit', 'wadmpr': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'laki_laki': 'TextEdit', 'perempuan': 'TextEdit', 'jml_pddk': 'TextEdit', 'metadata': 'TextEdit', 'simbologi': 'TextEdit', });
lyr_Area_Strategis_2.set('fieldImages', {'wadmkc': 'TextEdit', 'wadmkd': 'TextEdit', 'wadmkk': 'TextEdit', 'wadmpr': 'TextEdit', 'Buffer': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Jalan_3.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'TextEdit', 'namobj': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_le_1': 'TextEdit', });
lyr_SMA_4.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'TextEdit', 'kecamatan': 'TextEdit', 'desa': 'TextEdit', 'dusun': 'TextEdit', 'sumber': 'TextEdit', 'nama_satua': 'TextEdit', 'npsn': 'TextEdit', 'bentuk_pen': 'TextEdit', 'status_sek': 'TextEdit', 'jumlah_rom': 'TextEdit', 'siswa_l': 'TextEdit', 'siswa_p': 'TextEdit', 'siswa_tota': 'TextEdit', 'skl_plyan': 'TextEdit', 'namobj': 'TextEdit', });
lyr_Sleman_1.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'namobj': 'no label', 'srs_id': 'no label', 'wadmkc': 'inline label - visible with data', 'wadmkd': 'no label', 'wadmkk': 'no label', 'wadmpr': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'laki_laki': 'no label', 'perempuan': 'no label', 'jml_pddk': 'no label', 'metadata': 'no label', 'simbologi': 'no label', });
lyr_Area_Strategis_2.set('fieldLabels', {'wadmkc': 'no label', 'wadmkd': 'no label', 'wadmkk': 'no label', 'wadmpr': 'no label', 'Buffer': 'no label', 'Keterangan': 'inline label - always visible', });
lyr_Jalan_3.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'namobj': 'no label', 'fcode': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', });
lyr_SMA_4.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'kecamatan': 'no label', 'desa': 'no label', 'dusun': 'no label', 'sumber': 'no label', 'nama_satua': 'no label', 'npsn': 'no label', 'bentuk_pen': 'no label', 'status_sek': 'inline label - visible with data', 'jumlah_rom': 'no label', 'siswa_l': 'no label', 'siswa_p': 'no label', 'siswa_tota': 'no label', 'skl_plyan': 'no label', 'namobj': 'no label', });
lyr_SMA_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});