    function ChangeDotColor() {

        document.getElementsByClassName("vue-slider-dot-handle").style.backgroundColor = 'black'

    }



    //  import vueSlider from 'vue-slider-component/src/vue2-slider.vue';
    Vue.use(VueNumeric.default);
    Vue.use(PrettyCheckbox);
    Vue.use(VueCharts);
    Vue.component("v-chart", VueECharts);

    // import VTooltip  from 'v-tooltip';
    // Vue.use(VTooltip);
    var app = new Vue({
        el: '#app',

        data: {
            message: ' testing',
            check: false,
            formatter1: '{value} %',
            formatter2: '{value} €',
            formatter0: '{value}',
            formatter3: '{value} ans',
            demo: 1,
            marks1: {

                '18': '18', '19': '19', '20': '20', '21': '21', '22': '22', '23': '23', '24': '24', '25': '25', '26': '26', '27': '27', '28': '28', '29': '29', '30': '30', '31': '31', '32': '32', '33': '33', '34': '34', '35': '35', '36': '36', '37': '37', '38': '38', '39': '39', '40': '40', '41': '41', '42': '42', '43': '43', '44': '44', '45': '45', '46': '46', '47': '47', '48': '48', '49': '49', '50': '50', '51': '51', '52': '52', '53': '53', '54': '54', '55': '55', '56': '56', '57': '57', '58': '58', '59': '59', '60': '60', '61': '61', '62': '62', '63': '63', '64': '64', '65': '65', '66': '66', '67': '67', '68': '68', '69': '69', '70': '70', '71': '71', '72': '72', '73': '73', '74': '74', '75': '75', '76': '76', '77': '77', '78': '78', '79': '79', '80': '80', '81': '81', '82': '82', '83': '83', '84': '84', '85': '85', '86': '86', '87': '87', '88': '88', '89': '89', '90': '90', '91': '91', '92': '92', '93': '93', '94': '94', '95': '95', '96': '96', '97': '97', '98': '98', '99': '99'
                // '1':'1', '2':'2', '3':'3', '4':'4', '5':'5', '6':'6', '7':'7', '8':'8', '9':'9','10':'10', '11':'11', '12':'12', '13':'13', '14':'14', '15':'15', '16':'16', '17':'17', '18':'18', '19':'19', '20':'20', '21':'21', '22':'22', '23':'23', '24':'24', '25':'25','26':'26', '27':'27', '28':'28', '29':'29', '30':'30', '31':'31', '32':'32', '33':'33', '34':'34', '35':'35', '36':'36', '37':'37', '38':'38', '39':'39', '40':'40', '41':'41', '42':'42', '43':'43', '44':'44', '45':'45', '46':'46', '47':'47', '48':'48', '49':'49', '50':'50', '51':'51', '52':'52', '53':'53', '54':'54', '55':'55', '56':'56', '57':'57', '58':'58', '59':'59', '60':'60', '61':'61', '62':'62', '63':'63', '64':'64', '65':'65', '66':'66', '67':'67', '68':'68', '69':'69', '70':'70', '71':'71', '72':'72', '73':'73', '74':'74', '75':'75', '76':'76', '77':'77', '78':'78', '79':'79', '80':'80', '81':'81', '82':'82', '83':'83', '84':'84', '85':'85', '86':'86', '87':'87', '88':'88', '89':'89', '90':'90', '91':'91', '92':'92', '93':'93', '94':'94', '95':'95', '96':'96', '97':'97', '98':'98','99':'99','100':'100'

            },
            D4: 18,
            C8: 1,
            C10a: 0,
            C10b: 0,
            C10c: 0,
            C15: 1,
            C17: 0,
            C29: 0,
            C31: 0,
            C33: 1,
            C36: 0,
            C38: 0,
            C40: 0,
            C41: 0,
            C44: 0,


            TF3: 502,
            TF4: 451,
            TF5: 402,
            TF6: 420,
            TF7: 348,
            TF8: 318,
            H13: '',


            I3: 30,
            I4: 20,
            I5: 10,
            I6: 10,
            I7: 10,
            I8: 10,
            I9: 10,
            I10: 10,
            I11: 10,
            I12: 5,


            Business: [
                {
                    Child1: 1,
                    Child2: 0,
                    Child3: 0,
                    Child4: 0,
                    count: 0,
                },
                {
                    Child1: 1,
                    Child2: 0,
                    Child3: 0,
                    Child4: 0,
                    count: 0,
                },
                {
                    Child1: 1,
                    Child2: 0,
                    Child3: 0,
                    Child4: 0,
                    count: 0,
                },
                {
                    Child1: 1,
                    Child2: 0,
                    Child3: 0,
                    Child4: 0,
                    count: 0,
                },
                {
                    Child1: 1,
                    Child2: 0,
                    Child3: 0,
                    Child4: 0,
                    count: 0,
                },
                {
                    Child1: 1,
                    Child2: 0,
                    Child3: 0,
                    Child4: 0,
                    count: 0,
                },
                {
                    Child1: 1,
                    Child2: 0,
                    Child3: 0,
                    Child4: 0,
                    count: 0,
                },
                {
                    Child1: 1,
                    Child2: 0,
                    Child3: 0,
                    Child4: 0,
                    count: 0,
                },
            ],
        },
        computed: {

            chart1: function () {
                return {
                    
                    tooltip: {
                        trigger: 'item',
                        confine: true,
                        position: ['39%', '21%'],

                        // formatter: function(params) {
                        //     return `${params.data.name}:</br> <b> ${val}</b> `
                        // }
                    },

                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            // dataView : {show: true, readOnly: false},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    legend: {
                        left: "0%",
                        top: "4%",
                        right: "0%",
                        left: 'center'
                    },
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            value: {
                                show: true
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '17',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [{
                                value: this.D71,
                                name: 'Regelsatz \n' + this.D71 + '€'
                            }, {
                                value: this.D72,
                                name: 'Mehrbedarf \n' + this.D72 + '€'
                            }, {
                                value: this.D73,
                                name: 'Einkünfte \n' + this.D73 + '€ '
                            }, {
                                value: this.D74,
                                name: 'Wohnung  \n' + this.D74 + '€  '
                            }

                            ],
                        }
                    ]
                };

            },








            D59: function () {
                if (this.C8 == 1) { return this.TF3; }
                else if (this.C8 == 4) { return this.TF5; }
                else if (this.C8 == 2) {
                    if (this.C15 >= 14 && this.C15 < 18) {
                        return this.TF3;
                    } else { return this.TF4; }
                } else if (this.C8 == 3) { return this.TF5; }
                else {
                    return 0;
                }
            },
            D60: function () {
                console.log(this.Business[1], this.Business[2], this.Business[3], this.Business[4]);
                if (this.C8 == 2) { return this.TF4 } else { return 0 }
            },

            businessTotal: function () {
                return this.Business.reduce(function (sum, item) {
                    return sum + item.Owned
                }, 0)
            },
            // score: function () {
            //     var sum = 0;
            //     for (let i = 0; i < this.yourPoints.length; i++) {
            //         sum += this.yourPoints[i];
            //     }

            //     return sum;
            // },
            D61: function () {
                let visibleItems= this.C17;
                const count1 = this.Business.filter((obj,index) => obj.Child1 == 1 && index <visibleItems).length;
                const count2 = this.Business.filter((obj,index) => obj.Child1 == 2 && index <visibleItems).length;
                const count3 = this.Business.filter((obj,index) => obj.Child1 == 3 && index <visibleItems).length;
                const count4 = this.Business.filter((obj,index) => obj.Child1 == 4 && index <visibleItems).length;
                console.log(count1 + '' + count2 + '' + count3 + '' + count4);
                return count1 * this.TF8 + count2 * this.TF7 + count3 * this.TF6 + count4 * this.TF5
            },
            D62: function () {
                return this.D59 + this.D60 + this.D61
            },
            F59: function () {
                if ((this.C8 == 1 && this.C17 == 1 && (this.Business.filter((obj,index) => obj.Child1 == 1 && index <visibleItems).length) == 1)
                    || (this.C8 == 1 && this.C17 == 2 && (this.Business.filter((obj,index) => obj.Child2 == 1 && index <visibleItems).length)) == 2) {
                    return this.D59 * 0.36
                } else {
                    if ((this.C8 == 1 && this.C17 > 2 && this.C17 <= 5)) {
                        this.C17 * 0.12 * this.D59
                    } else {
                        if ((this.C8 == 1 && this.C17 > 5)) {
                            return this.D59 * 0.6
                        }
                        else {
                            return 0
                        }
                    }
                }
            }, F60: function () {
                if (this.C10a == 1) { return this.D59 * 0.17 } else { return 0 };
            },
            F61: function () {
                if (this.C10b == 1) { return this.D59 * 0.35 } else { return 0 };
            },
            F62: function () {
                if (this.C10c == 1) {
                    if (this.H13 == "Mukoviszidose") {
                        return (this.TI3 / 100) * this.D59;
                    } else
                        if (this.H13 == "Zöliakie") {
                            (this.TI4 / 100) * this.D59
                        } else
                            if (this.H13 == "Tumorerkrankungen" || this.H13 == "Chronisch obstruktive Lungenerkrankungen (COPD)" || this.H13 == "CED (Morbus Crohn, Collitis Ulcerosa)" || this.H13 == "Neurologische Erkrankungen (auch Schluckstörungen)" || this.H13 == "terminale und präterminale Niereninsuffizienz, insb. bei Dialyse" || this.H13 == "Wundheilungsstörungen" || this.H13 == "Terminale Niereninsuffizienz mit Dialysetherapie") { return (this.TI5 / 100) * this.D59 }
                            else
                                if (this.H13 == "Terminale Niereninsuffizienz mit Dialysetherapie") {
                                    return (this.TI12 / 100) * this.D59
                                }
                                else {
                                    return 0
                                }
                }
                else {
                    return 0
                }
            },
            F63: function () {
                return this.F59 + this.F60 + this.F61 + this.F62
            },
            D65: function () {
                return this.C36 + this.C38
            },
            D66: function () {
                // =SUM(IF(this.C36>0,SUM(IF(this.C36>99,100,this.C36),IF(AND(this.C36>99,this.C36<520),(this.C36-100)*0.2,0),IF(AND(this.C36>519,this.C36<=1000),SUM(520*0.2,(this.C36-620)*0.3),0)),0),IF(D38>0,SUM(IF(D38>99,100,D38),IF(AND(D38>99,D38<520),(D38-100)*0.2,0),IF(AND(D38>519,D38<=1000),SUM(520*0.2,(D38-620)*0.3),0)),0))

                return 0
            },
            D67: function () {
                return this.C44
            },
            F65: function () { return this.C29 },
            F66: function () { return this.C31 },
            F67: function () { if (this.C33 == 1) { return this.F66 * 0.18 } else { return 0 } },
            D68: function () { if ((this.D65 - this.D66 - this.D67) < 0) { return 0 } else { return this.D65 - this.D66 - this.D67 } },
            F68: function () { return this.F65 + this.F66 - this.F67 },
            D71: function () {
                return this.D62;
            },
            D72: function () {
                return this.F63;
            },
            D73: function () {
                return this.D68;
            },
            D74: function () {
                return this.F68;
            },
            D75: function () {
                if (this.D71 + this.D72 + this.D74 - this.D73 < 0) { return 0 } else { return this.D71 + this.D72 + this.D74 - this.D73 };
            },
        },
        methods: {
            RemoveItem:function(index,bussiness){
                this.C17--;
                //reset the values of current object
                bussiness.Child1= 1;
                    bussiness.Child2= 0;
                    bussiness.Child3= 0;
                    bussiness.Child4= 0;
                    bussiness.count= 0;
                
                //move the current item to end of collection
                
                this.Business.push(this.Business.splice(index, 1)[0]);
            },

            formatValue:function(){
        //         amt = this.value.toString();
        // var lastThree = amt.substring(amt.length - 3);
        // var otherNumbers = amt.substring(0, amt.length - 3);
        // if (otherNumbers != '')
        //     lastThree = ',' + lastThree;
        // var result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        
        // return result;
            },
            C10a1Function: function () {
                this.C10a = 1;
                document.getElementsByClassName('C10a1Function')[0].style.backgroundColor = "#84be16";
                document.getElementsByClassName('C10a1Function')[0].style.color = "white";
                document.getElementsByClassName('C10a2Function')[0].style.backgroundColor = "#e6e1e1";
                document.getElementsByClassName('C10a2Function')[0].style.color = "black";
            },
            C10a2Function: function () {
                this.C10a = 0;
                document.getElementsByClassName('C10a2Function')[0].style.backgroundColor = "#84be16";
                document.getElementsByClassName('C10a1Function')[0].style.backgroundColor = "#e6e1e1";

            },
            C10b1Function: function () {
                this.C10b = 1;
                document.getElementsByClassName('C10b1Function')[0].style.backgroundColor = "#84be16";
                document.getElementsByClassName('C10b2Function')[0].style.backgroundColor = "#e6e1e1";
            },
            C10b2Function: function () {
                this.C10b = 0;
                document.getElementsByClassName('C10b2Function')[0].style.backgroundColor = "#84be16";
                document.getElementsByClassName('C10b1Function')[0].style.backgroundColor = "#e6e1e1";
            },
            C10c1Function: function () {
                this.C10c = 1;
                document.getElementsByClassName('C10c2Function')[0].style.backgroundColor = "#e6e1e1";
                document.getElementsByClassName('C10c1Function')[0].style.backgroundColor = "#84be16";
            },
            C10c2Function: function () {
                this.C10c = 0;
                document.getElementsByClassName('C10c2Function')[0].style.backgroundColor = "#84be16";
                document.getElementsByClassName('C10c1Function')[0].style.backgroundColor = "#e6e1e1";
            },
            C331Function: function () {
                this.C33 = 1;
                document.getElementsByClassName('C332Function')[0].style.backgroundColor = "#e6e1e1";
                document.getElementsByClassName('C331Function')[0].style.backgroundColor = "#84be16";
            },
            C332Function: function () {
                this.C33 = 0;
                document.getElementsByClassName('C332Function')[0].style.backgroundColor = "#84be16";
                document.getElementsByClassName('C331Function')[0].style.backgroundColor = "#e6e1e1";
            },
            C401Function: function () {
                this.C40 = 1;
                document.getElementsByClassName('C402Function')[0].style.backgroundColor = "#e6e1e1";
                document.getElementsByClassName('C401Function')[0].style.backgroundColor = "#84be16";
            },
            C402Function: function () {
                this.C40 = 0;
                document.getElementsByClassName('C402Function')[0].style.backgroundColor = "#84be16";
                document.getElementsByClassName('C401Function')[0].style.backgroundColor = "#e6e1e1";
            },
            addBusiness: function () {
                this.Business.push({

                    Child1: 0,
                    Child2: 0,
                    Child3: 0,
                    Child4: 0,
                    count: 0,
                });
            },
            DownloadPDF: function () {

                var doc = new jsPDF();
                doc.setFontSize(20);
                var y = 25;
                doc.setTextColor(132, 190, 22, 1)
                doc.text("Bürgergeld Rechner", 16, y);

                doc.setFontSize(10);
                y += 9;
                doc.setTextColor(100)

                doc.text("Wie alt sind Sie :", 16, y);
                doc.text(this.D4 + '', 90, y);

                doc.text("2.Lebenssituation :", 16, y += 4);
                if (this.C8 == 1) { doc.text('Single/ Alleinerziehende/r', 90, y = y) }
                if (this.C8 == 4) { doc.text('in stationärer Einrichtung ', 90, y = y) }
                if (this.C8 == 2) { doc.text('mit Partner/in ', 90, y = y) }

                doc.text("3a.Sind Sie Schwanger :", 16, y += 4);
                if (this.C10a == 0) { doc.text("nein", 90, y = y); }
                if (this.C10a == 1) { doc.text("ja", 90, y = y); }

                doc.text("3b.Liegt eine Behinderungvor :", 16, y += 4);
                if (this.C10b == 0) { doc.text("nein", 90, y = y); }
                if (this.C10b == 1) { doc.text("ja", 90, y = y); }

                doc.text("3c.Besondere/kostenaufwendige Ernährung :", 16, y += 4);
                if (this.C10c == 0) { doc.text("nein", 90, y = y); }
                if (this.C10c == 1) { doc.text("ja" + (this.C10c == 1 ? (" ( " + this.H13 + " ) ") : ""), 90, y = y); }

                doc.text("Warmwassergewinnung über Heizung :", 16, y += 4);
                if (this.C33 == 0) { doc.text("nein", 90, y = y); }
                if (this.C33 == 1) { doc.text("ja", 90, y = y); }

                if (this.C8 == 2) {
                    doc.text("Wie alt ist Ihr Lebenspartner :", 16, y += 4);
                    doc.text(this.C15 + "", 90, y = y);
                }

                doc.text("Wieviele Kinder haben Sie :", 16, y += 4);
                doc.text(this.C17 + "", 90, y = y);

                doc.text("Kalte Betriebskosten monatlich :", 16, y += 4);
                doc.text(this.C29 + "", 90, y = y);

                doc.text("Heizkosten monatlich :", 16, y += 4);
                doc.text(this.C31 + "", 90, y = y);


                doc.text("Einkünfte (netto) :", 16, y += 4);
                doc.text(this.C36 + "", 90, y = y);

                doc.text("Einkünfte Partner/in :", 16, y += 4);
                doc.text(this.C38 + "", 90, y = y);

                doc.text(" Beziehen Sie und/oder Ihr Rente :", 16, y += 4);
                if (this.C40 == 0) { doc.text("nein", 90, y = y); }
                if (this.C40 == 1) { doc.text("ja" + (this.C40 == 1 ? (" ( " + this.C41 + " ) ") : ""), 90, y = y); }


                doc.text("Wieviel Kindergeld erhalten Sie :", 16, y += 4);
                doc.text(this.C44 + "", 90, y = y);

                
                
            

                // doc.text("Sources and Uses", 14, doc.autoTable.previous.finalY + 5);
                //  y = doc.autoTable.previous.finalY + 6;
                
        

                doc.autoTable({
                    html: '#tableSecondLast',
                    styles: { cellPadding: 0.1, fontSize: 8 },
                    startY: y += 10,
                    headStyles :{fillColor : [132, 190, 22]},
                    footStyles :{fillColor : [132, 190, 22]},

                    didParseCell: function (data) {
                        var x = $(data.cell.raw).find('input').val();
                        data.cell.text = x == undefined ? data.cell.text : x;
                    }
                });
                doc.autoTable({
                    html: '#tableLast1',
                    styles: { cellPadding: 0.1, fontSize: 8 },
                    startY: y += 26,
                    headStyles :{fillColor : [132, 190, 22]},
                    footStyles :{fillColor : [132, 190, 22]},

                    didParseCell: function (data) {
                        var x = $(data.cell.raw).find('input').val();
                        data.cell.text = x == undefined ? data.cell.text : x;
                    }
                });
        
                doc.autoTable({
                    html: '#tableLast',
                    styles: { cellPadding: 0.1, fontSize: 8 },
                    startY: y += 20,
                    headStyles :{fillColor : [132, 190, 22]},
                    footStyles :{fillColor : [132, 190, 22]},
                    didParseCell: function (data) {
                        var x = $(data.cell.raw).find('input').val();
                        data.cell.text = x == undefined ? data.cell.text : x;
                    }
                });
                // doc.text("Debt Assumptions", 14, doc.autoTable.previous.finalY + 5);
                //  y = doc.autoTable.previous.finalY + 6;
                // doc.autoTable({
                //     html: '#table3',
                //     styles: { cellPadding: 0.1, fontSize: 8 },
                //     startY: y,
                //     didParseCell: function (data) {
                //         var x = $(data.cell.raw).find('input').val();
                //         data.cell.text = x == undefined ? data.cell.text : x;
                //     }
                // });
                // doc.text("SDE Calculation", 14, doc.autoTable.previous.finalY + 5);
                //  y = doc.autoTable.previous.finalY + 6;
                // doc.autoTable({
                //     html: '#table4',
                //     styles: { cellPadding: 0.1, fontSize: 8 },
                //     startY: y,
                //     didParseCell: function (data) {
                //         var x = $(data.cell.raw).find('input').val();
                //         data.cell.text = x == undefined ? data.cell.text : x;
                //     }
                // });
                // doc.text("Debt Service Covenant Ratio", 14, doc.autoTable.previous.finalY + 5);
                //  y = doc.autoTable.previous.finalY + 6;
                // doc.autoTable({
                //     html: '#table5',
                //     styles: { cellPadding: 0.1, fontSize: 8 },
                //     startY: y,
                //     didParseCell: function (data) {
                //         var x = $(data.cell.raw).find('input').val();
                //         data.cell.text = x == undefined ? data.cell.text : x;
                //     }
                // });



                doc.save('Deal Calculator.pdf');



            },
            ResetVal: function () {
                this.D4 = 18;
                this.C8 = 0;
                this.C10 = -1;
                this.C10 = -1;
                this.C10 = -1;
                this.C15 = 1;
                this.C17 = 0;
                this.C29 = 0;
                this.C31 = 0;
                this.C33 = 1;
                this.C36 = 0;
                this.C38 = 0;
                this.C40 = -1;
                this.C41 = 0;
                this.C44 = 0;
            }
            // clear: function () {
            //     this.F9 = 0;
            //     this.F12 = 0;
            //     this.F15 = 0;
            //     this.F18 = 0;
            //     this.F21 = 0;
            //     this.F24 = 0;
            //     this.F27 = 0;
            //     this.F30 = 0;
            //     this.F33 = 0;
            //     this.K9 = 0;
            //     this.K12 = 0;
            //     this.K15 = 0;
            //     this.K18 = 0;
            //     this.K21 = 0;
            //     this.K24 = 0;
            //     this.K27 = 0;
            //     this.K30 = 0;
            //     this.K33 = 0;



            //    // this.$forceUpdate();

            // }
        },
        components: {
            'vueSlider': window['vue-slider-component'],

        }
    });
