$wnd.hal.runAsyncCallback37("function xTh(){wTh()}\nfunction yVh(){xVh()}\nfunction BVh(){AVh()}\nfunction EVh(){DVh()}\nfunction xVh(){xVh=S5c}\nfunction AVh(){AVh=S5c}\nfunction DVh(){DVh=S5c}\nfunction wTh(){wTh=S5c}\nfunction LTh(){LTh=S5c}\nfunction OTh(){OTh=S5c}\nfunction RTh(){RTh=S5c}\nfunction UTh(){UTh=S5c}\nfunction XTh(){XTh=S5c}\nfunction $Th(){$Th=S5c}\nfunction bUh(){bUh=S5c}\nfunction mTh(){mTh=S5c;ugf()}\nfunction rVh(){rVh=S5c;Mdf()}\nfunction ATh(){ATh=S5c;wb();Upm()}\nfunction VTh(a){UTh();this.a=a}\nfunction YTh(a){XTh();this.a=a}\nfunction MTh(a,b){LTh();this.b=a;this.a=b}\nfunction STh(a,b,c){RTh();this.a=a;this.b=b;this.c=c}\nfunction cUh(a,b,c,d){bUh();this.b=a;this.d=b;this.c=c;this.a=d}\nfunction PTh(a,b,c,d,e){OTh();this.c=a;this.d=b;this.e=c;this.a=d;this.b=e}\nfunction _Th(a,b,c,d,e){$Th();this.e=a;this.b=b;this.c=c;this.d=d;this.a=e}\nfunction CTh(a,b,c,d){ATh();this.a=a;this.c=b;this.b=c;this.d=d;Db.call(this);this.QKb()}\nfunction iTh(a){fTh();_yf.call(this,a);this.KKb()}\nfunction sTh(a,b){mTh();return new tVh(b,a)}\nfunction uVh(a){rVh();return new crm(AMd('smtp')+' '+'Socket Binding',a.LKb('smtp'))}\nfunction vVh(a){rVh();return new crm(AMd('imap')+' '+'Socket Binding',a.LKb('imap'))}\nfunction wVh(a){rVh();return new crm(AMd('pop3')+' '+'Socket Binding',a.LKb('pop3'))}\nfunction vTh(a,b,c,d,e){mTh();{abo(a,Cao(b.Mxd().umd('Mail Session',c)));d.F5(c)}}\nfunction tTh(a,b){mTh();var c;{c=Fcb(b.get('mail-session').gab().Ad().SP(new xTh).LP(Lfe()),21);a.Sl(c)}}\nfunction pTh(a,b,c,d){mTh();var e,f;{e=(eTh(),aTh).resolve(a);f=(new Zgn(e,'read-resource')).L6c('recursive',true).build();b.j7c(f,new YTh(d))}}\nfunction uTh(a,b,c,d,e,f,g){mTh();var h,i;{if(hdb(g)){h=(eTh(),_Sh).resolve(a,f);i=(new Zgn(h,'add')).J6c('mail-session',f).payload(g).build();b.j7c(i,new cUh(c,d,f,e))}}}\nfunction qTh(a,b,c,d,e,f){mTh();var g,h;{h=a.iad((eTh(),_Sh));g=new Pwm('mail-session-form',b.Mxd().vmd('Mail Session'),h,DUd(ebb(Sab(Zpb,1),{3:1,1:1,4:1,6:1},2,6,['jndi-name','from','debug'])),new _Th(c,d,e,b,f));g.uB()}}\nfunction tVh(a,b){rVh();var c;Rdf.call(this,a.name,a.MKb().isEmpty()?b.Kxd().uid():b.Mxd().end(gh(', ').nd(a.MKb())).rw());this.hLb();c=new zqm(a);c.PVc('jndi-name');if(a.NKb('smtp')){c.RVc(new yVh)}if(a.NKb('imap')){c.RVc(new BVh)}if(a.NKb('pop3')){c.RVc(new EVh)}this.q4().fR(c)}\nfunction oTh(a,b,c,d,e,f,g,h,i){mTh();wgf.call(this,(new Okm(a,'mail-session','Mail Session'))._Tc().RTc(i.Mxd().Ipd()).$Tc());this.OKb();this.R5(new MTh(f,e));this.Z4(b.KSc('mail-session-add','Mail Session',(eTh(),_Sh),new PTh(g,i,f,e,d)));this.Z4(b.NSc('mail-session-refresh'));this.O5(new STh(this,c,h));this.T5(new VTh(i))}\nQ5c(1079,13,{1:1,14:1,13:1},iTh);_.LKb=function jTh(a){var b;b=rfn(this,'server'+'/'+a+'/'+'outbound-socket-binding-ref');return b.defined?b.asString():'n/a'};_.MKb=function kTh(){var a;a=new WTd;if(this.NKb('smtp')){a.add(AMd('smtp'))}if(this.NKb('imap')){a.add(AMd('imap'))}if(this.NKb('pop3')){a.add(AMd('pop3'))}return a};_.NKb=function lTh(a){return this.hasDefined('server')&&this.get('server').hasDefined(a)};Q5c(4806,32,{1:1,7:1,8:1,32:1},oTh);_.OKb=function nTh(){};_.PKb=function rTh(a,b,c){mTh();return new CTh(this,c,a,b)};var e1b=IHd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn',4806,KNc);Q5c(4807,1,{1:1},xTh);_.oh=function yTh(a){return ece(this,a)};_.hd=function zTh(a){return new iTh(Fcb(a,45))};var X0b=IHd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/0methodref$ctor$Type',4807,Rpb);Q5c(4813,1,{1:1,7:1},CTh);_.QKb=function BTh(){};_.k6=function GTh(){return Ypm(this)};_.Yn=function HTh(){return Zpm(this)};_.l6=function JTh(){return $pm(this)};_.p6=function KTh(){return _pm(this)};_.e0=function DTh(){var a;a=new WTd;a.add(this.b.GVc(this.d.h0c('mail-session').hI('name',this.c.name).eI()));a.add(this.b.CVc('Mail Session',this.c.name,(eTh(),_Sh),this.a));return a};_.LQ=function ETh(){if(!this.c.MKb().isEmpty()){return aqm(this.c.name,gh(', ').nd(this.c.MKb()))}return null};_.j6=function FTh(){var a;a=new WTd;a.add(this.c.name);a.addAll(this.c.MKb());return aMd(' ',a)};_.Zn=function ITh(){return this.c.name};var Y0b=IHd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/1',4813,Rpb);Q5c(4809,1,{1:1},MTh);_.C6=function NTh(a,b){pTh(this.b,this.a,a,b)};var Z0b=IHd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$0$Type',4809,Rpb);Q5c(4812,1,{1:1},PTh);_.E6=function QTh(a){qTh(this.c,this.d,this.e,this.a,this.b,a)};var $0b=IHd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$1$Type',4812,Rpb);Q5c(4814,1,{1:1},STh);_.D6=function TTh(a){return this.a.PKb(this.b,this.c,a)};var _0b=IHd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$2$Type',4814,Rpb);Q5c(4815,1,{1:1},VTh);_.B6=function WTh(a){return sTh(this.a,a)};var a1b=IHd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$3$Type',4815,Rpb);Q5c(4808,1,{1:1,10:1},YTh);_.mi=function ZTh(a){tTh(this.a,a)};var b1b=IHd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$4$Type',4808,Rpb);Q5c(4811,1,{1:1},_Th);_.L7=function aUh(a,b){uTh(this.e,this.b,this.c,this.d,this.a,a,b)};var c1b=IHd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$5$Type',4811,Rpb);Q5c(4810,1,{1:1,10:1},cUh);_.mi=function dUh(a){vTh(this.b,this.d,this.c,this.a,a)};var d1b=IHd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$6$Type',4810,Rpb);Q5c(5814,28,{1:1,8:1,28:1},tVh);_.hLb=function sVh(){};var x1b=IHd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview',5814,DOc);Q5c(5815,1,{1:1,89:1},yVh);_.pdb=function zVh(a){return uVh(a)};var u1b=IHd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview/lambda$0$Type',5815,Rpb);Q5c(5816,1,{1:1,89:1},BVh);_.pdb=function CVh(a){return vVh(a)};var v1b=IHd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview/lambda$1$Type',5816,Rpb);Q5c(5817,1,{1:1,89:1},EVh);_.pdb=function FVh(a){return wVh(a)};var w1b=IHd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview/lambda$2$Type',5817,Rpb);Q5c(1927,1,{1:1});_.yLb=function QWh(){var a;a=this.HLb(this.a.FD().qWc(),this.a.FD().oWc(),this.a.FD().sWc(),this.a.oC().hz(),this.a.PD().g8c(),this.a.SD().Ead(),this.a.SD().Dad(),this.a.JD().l0c(),this.a.YD().Zxd());this.DLb(a);return a};_.DLb=function WWh(a){};_.HLb=function $Wh(a,b,c,d,e,f,g,h,i){return new oTh(a,b,c,d,e,f,g,h,i)};Q5c(1931,1,{43:1,1:1});_.qm=function sXh(){this.b.Sl(this.a.a.yLb())};Q5c(145,1,{1:1,149:1});_.uid=function WOn(){return 'No configured mail servers found.'};Q5c(224,1,{1:1,235:1});_.end=function KVn(a){return (new E9c).zw('Configured mail servers: ').yw(a).Aw()};_.Ipd=function nYn(){return 'Filter by: session name or session type'};IEo(tQ)(37);\n//# sourceURL=hal-37.js\n")