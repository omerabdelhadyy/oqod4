(this.webpackJsonpoqod=this.webpackJsonpoqod||[]).push([[0],{12:function(e,t,n){e.exports={continer:"style_continer__qugaS",form:"style_form__3cFoG",textReg:"style_textReg__3buio",line:"style_line__1CxgI",inputs:"style_inputs__35dlv",TextField:"style_TextField__29gde",textLabel:"style_textLabel__31-wM",input1:"style_input1__2NGiN",Checkbox:"style_Checkbox__12VB3",textAccept:"style_textAccept__3Su80",divIncome:"style_divIncome__1Lney",divYes:"style_divYes__mo_qx",divSelectYes:"style_divSelectYes__2Oj-8",textYes:"style_textYes__1OJqR"}},248:function(e,t,n){},249:function(e,t,n){},33:function(e,t,n){e.exports={continer:"style_continer__200TT",viewHeader:"style_viewHeader__2LvAK",image:"style_image__1vwZn",textImage:"style_textImage__1ZQE2",estates:"style_estates__2y9t1",textabout:"style_textabout__2oOGr",textreal:"style_textreal__1DBTP",Realestate:"style_Realestate__1fE4G",footer:"style_footer__3MrMh",continerAbout:"style_continerAbout__1qWBG",textPrivacy:"style_textPrivacy__1ITgN",linkFooter:"style_linkFooter__2T0LQ"}},34:function(e,t,n){e.exports={continer:"style_continer__3UC2L",inputs:"style_inputs__ozu_X",textLabel:"style_textLabel__3Bi8C",picImage:"style_picImage__3e3wV",divpickImage:"style_divpickImage__17W1g",ImagePick:"style_ImagePick__2dW25",devPercentage:"style_devPercentage__1ROK9"}},501:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(13),l=n.n(o),s=(n(248),n(249),n(46)),r=n.n(s),c=n(91),d=n(10),u=n(11),v=n(16),h=n(15),j=n(236),g=n(17),b=n(12),p=n.n(b),m=n(537),f=n(535),x=n(536),O=n(538),y=n(534),_=n(226),k=n.n(_),w=n(227),P=n.n(w),C=n(1),N=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={showPassword:!1,income:!0},e}return Object(u.a)(n,[{key:"render",value:function(){var e,t,n=this,i=this.props,a=i.label,o=i.value,l=i.placeHolder,s=i.width,r=i.income;return Object(C.jsxs)("div",{className:p.a.input1,style:{width:s,margin:"Address"==a?0:10},children:[Object(C.jsx)("h1",{className:p.a.textLabel,children:a}),"Generetic Income"==a&&Object(C.jsxs)("div",{className:p.a.divIncome,children:[Object(C.jsxs)("div",{className:p.a.divYes,onClick:function(){n.setState({income:!0}),null===r||void 0===r||r(!0)},children:[Object(C.jsx)("div",{className:p.a.divSelectYes,children:this.state.income&&Object(C.jsx)("div",{style:{backgroundColor:"#B09E7A",height:"100%",width:"100%",borderRadius:50}})}),Object(C.jsx)("p",{className:p.a.textYes,children:"yes"})]}),Object(C.jsxs)("div",{className:p.a.divYes,onClick:function(){n.setState({income:!1}),null===r||void 0===r||r(!1)},children:[Object(C.jsx)("div",{className:p.a.divSelectYes,children:!this.state.income&&Object(C.jsx)("div",{style:{backgroundColor:"#B09E7A",height:"100%",width:"100%",borderRadius:50}})}),Object(C.jsx)("p",{className:p.a.textYes,children:"no"})]})]}),this.state.income?"Password"!=a&&"Repeat Password"!=a?Object(C.jsx)(x.a,{defaultValue:l,multiline:!0,style:{fontSize:4},disabled:"Address"==a&&!0,onChange:function(e){return o(e.target.value)},id:"filled-basic",label:"Address"!=a&&a,variant:"outlined",className:p.a.TextField,size:"small"}):Object(C.jsx)(x.a,{id:"filled-basic",label:a,variant:"outlined",className:p.a.TextField,size:"small",type:(null===(e=this.state)||void 0===e?void 0:e.showPassword)?"text":"password",InputProps:{endAdornment:Object(C.jsx)(O.a,{position:"end",children:Object(C.jsx)(y.a,{style:{fontSize:3},size:2,"aria-label":"toggle password visibility",onClick:function(){var e;return n.setState({showPassword:!(null===(e=n.state)||void 0===e?void 0:e.showPassword)})},children:(null===(t=this.state)||void 0===t?void 0:t.showPassword)?Object(C.jsx)(k.a,{style:{fontSize:20}}):Object(C.jsx)(P.a,{style:{fontSize:20}})})})}}):null]})}}]),n}(a.a.Component),S=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).onClickRegister=function(){console.log(e.state.Full_Name,e.state.Email)},e.state={Full_Name:"",Email:"",National_ID:"",Phone_Number:"",Password:"",Repeat_Password:""},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(C.jsxs)("div",{className:p.a.continer,children:[Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:"https://oqod.co/static/media/logo-primary.59f3b0bc.png",alt:"oqod",width:"160",height:"55"})}),Object(C.jsxs)("div",{className:p.a.form,children:[Object(C.jsx)("h1",{className:p.a.textReg,children:"Registration"}),Object(C.jsx)("div",{className:p.a.line}),Object(C.jsxs)("div",{className:p.a.inputs,children:[Object(C.jsx)(N,{width:"100%",label:"Full Name",value:function(t){return e.setState({Full_Name:t})}}),Object(C.jsx)(N,{width:"100%",label:"Email",value:function(t){return e.setState({Email:t})}}),Object(C.jsx)(N,{width:"100%",label:"National ID",value:function(t){return e.setState({National_ID:t})}}),Object(C.jsx)(N,{width:"100%",label:"Phone Number",value:function(t){return e.setState({Phone_Number:t})}}),Object(C.jsx)(N,{width:"100%",label:"Password",value:function(t){return e.setState({Password:t})}}),Object(C.jsx)(N,{width:"100%",label:"Repeat Password",value:function(t){return e.setState({Repeat_Password:t})}}),Object(C.jsxs)("div",{className:p.a.Checkbox,children:[Object(C.jsx)(m.a,{color:"default",style:{padding:0}}),Object(C.jsx)("p",{className:p.a.textAccept,children:"Accept Terms & Service"})]}),Object(C.jsx)(f.a,{onClick:function(){return e.onClickRegister()},style:{backgroundColor:"#AE9B77",fontSize:"15px",width:"50%",marginbottom:20,color:"#fff",textAlign:"center",textTransform:"capitalize",marginTop:10},variant:"contained",children:"Register"}),Object(C.jsx)("p",{onClick:function(){return e.props.history.push("/Home")},children:"Already have an account ?"})]})]})]})}}]),n}(a.a.Component),I=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).onClickLogin=function(){e.props.history.push("/Home")},e.state={Email:"",Password:""},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(C.jsxs)("div",{className:p.a.continer,children:[Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:"https://oqod.co/static/media/logo-primary.59f3b0bc.png",alt:"oqod",width:"160",height:"55"})}),Object(C.jsxs)("div",{className:p.a.form,children:[Object(C.jsx)("h1",{className:p.a.textReg,children:"Log in"}),Object(C.jsx)("div",{className:p.a.line}),Object(C.jsxs)("div",{className:p.a.inputs,children:[Object(C.jsx)(N,{width:"100%",label:"Email",value:function(t){return e.setState({Email:t})}}),Object(C.jsx)(N,{width:"100%",label:"Password",value:function(t){return e.setState({Password:t})}}),Object(C.jsx)(f.a,{onClick:function(){return e.onClickLogin()},style:{backgroundColor:"#AE9B77",fontSize:"15px",width:"50%",marginbottom:20,color:"#fff",textAlign:"center",textTransform:"capitalize",marginTop:10},variant:"contained",children:"Log in"}),Object(C.jsxs)("p",{children:["Don\u2019t have an account yet?",Object(C.jsxs)("a",{href:"",class:"button",onClick:function(){return e.props.history.push("/")},children:["\r"," Register"]})]})]})]})]})}}]),n}(a.a.Component),A=n(94),L=n(33),R=n.n(L),E=n(56),F=n.n(E),D=n(154),z=n.n(D),T=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:F.a.continer,children:[Object(C.jsx)("h1",{style:{fontSize:12},children:"Property #1"}),Object(C.jsx)("img",{style:{borderRadius:10,marginTop:10},src:"https://png.pngtree.com/background/20210711/original/pngtree-network-information-electronic-technology-background-picture-image_1096792.jpg",width:200,height:80}),Object(C.jsxs)("div",{className:F.a.divCArdRow,children:[Object(C.jsx)("p",{children:"Price: $450"}),Object(C.jsx)(f.a,{style:{backgroundColor:"#AE9B77",fontSize:"6px",color:"#fff",textAlign:"center",textTransform:"capitalize",borderRadius:5},variant:"contained",children:"Buy"})]}),Object(C.jsxs)("div",{className:F.a.divProgressBar,children:[Object(C.jsx)(z.a,{completed:80,className:F.a.ProgressBar,labelSize:10,height:4,margin:10,width:"80%",isLabelVisible:!1,baseBgColor:"#EFF3F5",bgColor:"#46DD67"}),Object(C.jsx)("h1",{style:{fontSize:10},children:"90%"})]})]})}}]),n}(a.a.Component),B=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:F.a.continer,children:[Object(C.jsx)("h1",{style:{fontSize:12},children:"Find your project or liquidate"}),Object(C.jsx)("img",{style:{borderRadius:10,marginTop:10},src:"https://png.pngtree.com/background/20210711/original/pngtree-network-information-electronic-technology-background-picture-image_1096792.jpg",width:200,height:80}),Object(C.jsx)("p",{className:F.a.pReal,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."})]})}}]),n}(a.a.Component),M=n(155),q=n.n(M),Y=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(C.jsxs)("div",{className:R.a.viewHeader,children:[Object(C.jsx)("img",{src:"https://oqod.co/static/media/logo-primary.59f3b0bc.png",alt:"oqod",width:"160",height:"55"}),Object(C.jsxs)("a",{href:"",class:"button",onClick:function(){return e.props.history.push("/")},children:["\r"," About"]}),Object(C.jsxs)("a",{href:"",class:"button",onClick:function(){return e.props.history.push("/")},children:["\r"," Home it works"]}),Object(C.jsxs)("a",{href:"",class:"button",onClick:function(){return e.props.history.push("/")},children:["\r"," Blogs"]}),Object(C.jsxs)("a",{href:"",class:"button",onClick:function(){return e.props.history.push("/")},children:["\r"," Countact Us"]}),Object(C.jsx)(f.a,{onClick:function(){return e.props.push("/Create")},style:{backgroundColor:"#AE9B77",fontSize:"12px",width:"17%",color:"#fff",textAlign:"center",textTransform:"capitalize",borderRadius:10},variant:"contained",children:"List Property"})]})}}]),n}(a.a.Component),U=(a.a.Component,"\n.container {\n  //  margin: 20 ;\n  //  padding: 0px 0px 0px 70px;\n  width: 100%;\n  text-align: center;\n  //  display: block; \n  //  background: #5f9ea0;\n   justify-content: space-between; \n  //  align-items: center;\n   align-self: center;\n   margin-left: 30px;\n\n}\nh3 {\n    background: #5f9ea0;\n    color: #fff;\n    font-size: 12px;\n    line-height: 100px;\n    margin: 10px;\n    padding: 2%;\n    position: relative;\n    text-align: center;\n}\n.slick-next:before, .slick-prev:before {\n    color: #000;\n}\n"),G=n(34),H=n.n(G),W=n(120),K=n(47),V=n(67),J=n(95),X=n.n(J),Z=n(230),Q=n.n(Z);X.a.setApiKey(""),X.a.enableDebug();var $=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(e){var i,a,o,l,s,r,c,u,v,h,j,g,b;return Object(d.a)(this,n),(b=t.call(this,e)).getCity=function(e){for(var t=0;t<(null===e||void 0===e?void 0:e.length);t++){var n,i,a,o;if((null===e||void 0===e||null===(n=e[t])||void 0===n||null===(i=n.types)||void 0===i?void 0:i[0])&&"administrative_area_level_2"===(null===e||void 0===e||null===(a=e[t].types)||void 0===a?void 0:a[0]))return null===e||void 0===e||null===(o=e[t])||void 0===o?void 0:o.long_name}},b.getArea=function(e){for(var t=0;t<(null===e||void 0===e?void 0:e.length);t++){var n,i;if(null===e||void 0===e||null===(n=e[t])||void 0===n||null===(i=n.types)||void 0===i?void 0:i[0])for(var a=0;a<(null===e||void 0===e||null===(o=e[t])||void 0===o?void 0:o.types.length);a++){var o,l,s,r,c;if("sublocality_level_1"===(null===e||void 0===e||null===(l=e[t])||void 0===l||null===(s=l.types)||void 0===s?void 0:s[a])||"locality"===(null===e||void 0===e||null===(r=e[t])||void 0===r?void 0:r.types[a]))return null===e||void 0===e||null===(c=e[t])||void 0===c?void 0:c.long_name}}},b.getState=function(e){for(var t=0;t<(null===e||void 0===e?void 0:e.length);t++)for(var n=0;n<(null===e||void 0===e?void 0:e.length);n++){var i,a,o,l,s;if((null===e||void 0===e||null===(i=e[n])||void 0===i||null===(a=i.types)||void 0===a?void 0:a[0])&&"administrative_area_level_1"===(null===e||void 0===e||null===(o=e[n])||void 0===o||null===(l=o.types)||void 0===l?void 0:l[0]))return null===e||void 0===e||null===(s=e[n])||void 0===s?void 0:s.long_name}},b.onChange=function(e){b.setState(Object(W.a)({},e.target.name,e.target.value))},b.onInfoWindowClose=function(e){},b.onMarkerDragEnd=function(e){console.log("event",e.latLng);var t=e.latLng.lat(),n=e.latLng.lng();X.a.fromLatLng(t,n).then((function(t){console.log("resss",t);var n=t.results[0].formatted_address,i=t.results[0].address_components,a=b.getCity(i),o=b.getArea(i),l=b.getState(i);b.setState({address:n||"",area:o||"",city:a||"",state:l||"",markerPosition:{lat:e.latLng.lat(),lng:e.latLng.lng()},mapPosition:{lat:e.latLng.lat(),lng:e.latLng.lng()}})}),(function(e){console.error(e)}))},b.onPlaceSelected=function(e){var t,n,i=null===e||void 0===e?void 0:e.formatted_address,a=null===e||void 0===e?void 0:e.address_components,o=b.getCity(a),l=b.getArea(a),s=b.getState(a),r=null===e||void 0===e||null===(t=e.geometry)||void 0===t?void 0:t.location.lat(),c=null===e||void 0===e||null===(n=e.geometry)||void 0===n?void 0:n.location.lng();b.setState({address:i||"",area:l||"",city:o||"",state:s||"",markerPosition:{lat:r,lng:c},mapPosition:{lat:r,lng:c}})},b.state={address:"",city:"",area:"",state:"",mapPosition:{lat:null===(i=Object(K.a)(b))||void 0===i||null===(a=i.props)||void 0===a||null===(o=a.center)||void 0===o?void 0:o.lat,lng:null===(l=Object(K.a)(b))||void 0===l||null===(s=l.props)||void 0===s||null===(r=s.center)||void 0===r?void 0:r.lng},markerPosition:{lat:null===(c=Object(K.a)(b))||void 0===c||null===(u=c.props)||void 0===u||null===(v=u.center)||void 0===v?void 0:v.lat,lng:null===(h=Object(K.a)(b))||void 0===h||null===(j=h.props)||void 0===j||null===(g=j.center)||void 0===g?void 0:g.lng}},b}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e,t,n=this;X.a.fromLatLng(null===this||void 0===this||null===(e=this.state)||void 0===e?void 0:e.mapPosition.lat,null===this||void 0===this||null===(t=this.state)||void 0===t?void 0:t.mapPosition.lng).then((function(e){console.log("omerrr");var t=e.results[0].formatted_address,i=e.results[0].address_components,a=n.getCity(i),o=n.getArea(i),l=n.getState(i);console.log("city",a,o,l),n.setState({address:t||"",area:o||"",city:a||"",state:l||""})}),(function(e){console.error(e)}))}},{key:"shouldComponentUpdate",value:function(e,t){var n,i,a,o,l,s,r,c,d,u,v;return(null===this||void 0===this||null===(n=this.state)||void 0===n||null===(i=n.markerPosition)||void 0===i?void 0:i.lat)!==(null===this||void 0===this||null===(a=this.props)||void 0===a||null===(o=a.center)||void 0===o?void 0:o.lat)||(null===this||void 0===this||null===(l=this.state)||void 0===l?void 0:l.address)!==(null===t||void 0===t?void 0:t.address)||(null===this||void 0===this||null===(s=this.state)||void 0===s?void 0:s.city)!==(null===t||void 0===t?void 0:t.city)||(null===this||void 0===this||null===(r=this.state)||void 0===r?void 0:r.area)!==(null===t||void 0===t?void 0:t.area)||(null===this||void 0===this||null===(c=this.state)||void 0===c?void 0:c.state)!==(null===t||void 0===t?void 0:t.state)||(null===this||void 0===this||null===(d=this.props)||void 0===d||null===(u=d.center)||void 0===u?void 0:u.lat)!==(null===e||void 0===e||null===(v=e.center)||void 0===v?void 0:v.lat)&&void 0}},{key:"render",value:function(){var e,t,n=this,i=Object(V.withScriptjs)(Object(V.withGoogleMap)((function(e){var t,i,a,o,l,s;return Object(C.jsxs)(V.GoogleMap,{google:null===n||void 0===n||null===(t=n.props)||void 0===t?void 0:t.google,defaultZoom:null===n||void 0===n||null===(i=n.props)||void 0===i?void 0:i.zoom,defaultCenter:{lat:null===n||void 0===n||null===(a=n.state)||void 0===a||null===(o=a.mapPosition)||void 0===o?void 0:o.lat,lng:null===n||void 0===n||null===(l=n.state)||void 0===l||null===(s=l.mapPosition)||void 0===s?void 0:s.lng},children:[Object(C.jsx)(V.InfoWindow,{onClose:n.onInfoWindowClose,position:{lat:n.state.markerPosition.lat+.0018,lng:n.state.markerPosition.lng},children:Object(C.jsx)("span",{style:{padding:0,margin:0},children:n.state.address})}),Object(C.jsx)(V.Marker,{google:n.props.google,name:"Dolores park",draggable:!0,onDragEnd:n.onMarkerDragEnd,position:{lat:n.state.markerPosition.lat,lng:n.state.markerPosition.lng}}),Object(C.jsx)(V.Marker,{}),Object(C.jsx)(Q.a,{style:{width:"97%",height:"40px",paddingLeft:"16px",backgroundColor:"#ececec",borderColor:"#000",borderWidth:0,borderRadius:2},onPlaceSelected:n.onPlaceSelected,types:["(regions)"]})]})})));return void 0!==(null===this||void 0===this||null===(e=this.props)||void 0===e||null===(t=e.center)||void 0===t?void 0:t.lat)?Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{style:{width:"100%"},children:Object(C.jsx)(N,{placeHolder:this.state.address,label:"Address",width:"100%"})}),Object(C.jsx)(i,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=&libraries=places",loadingElement:Object(C.jsx)("div",{style:{height:"100%"}}),containerElement:Object(C.jsx)("div",{style:{height:this.props.height}}),mapElement:Object(C.jsx)("div",{style:{height:"100%"}})})]}):Object(C.jsx)("div",{style:{height:this.props.height}})}}]),n}(a.a.Component),ee=n(159),te=n(235),ne=n.n(te),ie=n(234),ae=n.n(ie),oe=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).config={bucketName:"myBucket",dirName:"photos",region:"eu-west-1",accessKeyId:"ANEIFNENI4324N2NIEXAMPLE",secretAccessKey:"cms21uMx\xe7duyUxYjeg20+DEkgDxe6veFosBT7eUgEXAMPLE"},e.UploadS3=function(){var t,n;ae.a.uploadFile(null===(t=Object(K.a)(e))||void 0===t||null===(n=t.props)||void 0===n?void 0:n.item,e.config).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e,t,n,i=this;return Object(C.jsxs)("div",{style:{position:"relative"},children:[Object(C.jsx)("img",{src:null===(e=URL)||void 0===e||null===(t=e.createObjectURL)||void 0===t?void 0:t.call(e,null===this||void 0===this||null===(n=this.props)||void 0===n?void 0:n.item),width:100,height:100,style:{borderRadius:4}}),Object(C.jsx)("div",{onClick:function(){return i.props.deleteImage()},children:Object(C.jsx)(ne.a,{style:{position:"absolute",top:0,right:0,color:"red",backgroundColor:"#000"}})})]})}}]),n}(a.a.Component),le=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).picImage=function(){},e.handleImageSelect=function(t,n){var i,a,o=null===(i=t.target)||void 0===i||null===(a=i.files)||void 0===a?void 0:a[0],l=e.state.dataImage;l.push(o),e.setState({dataImage:l})},e.handledataPropety_DeedSelect=function(t){var n,i,a=null===(n=t.target)||void 0===n||null===(i=n.files)||void 0===i?void 0:i[0],o=e.state.dataPropety_Deed;o.push(a),e.setState({dataPropety_Deed:o})},e.deleteImage=function(t,n){var i=("Image"==n?e.state.dataImage:e.state.dataPropety_Deed).filter((function(e){return e!=t}));"Image"==n?e.setState({dataImage:i}):e.setState({dataPropety_Deed:i})},e.state={latitude:0,longitude:0,dataImage:[],income:!1,dataPropety_Deed:[]},e}return Object(u.a)(n,[{key:"render",value:function(){var e,t,n,i,a,o,l=this;return Object(C.jsxs)("div",{className:H.a.continer,children:[Object(C.jsx)(Y,{}),Object(C.jsxs)("div",{className:H.a.inputs,children:[Object(C.jsx)(N,{label:"Title",value:function(e){return l.setState({Full_Name:e})}}),Object(C.jsx)("div",{style:{width:"50%",margin:30,marginBottom:40},children:Object(C.jsx)($,{google:this.props.google,center:{lat:30.0384256,lng:31.1820288},height:"300px",zoom:15})}),Object(C.jsx)(N,{label:"Description",value:function(e){return l.setState({Full_Name:e})}}),Object(C.jsxs)("div",{className:H.a.picImage,children:[Object(C.jsx)("h1",{className:H.a.textLabel,children:"Pictures"}),Object(C.jsxs)("div",{className:H.a.divpickImage,children:[null===this||void 0===this||null===(e=this.state)||void 0===e||null===(t=e.dataImage)||void 0===t||null===(n=t.map)||void 0===n?void 0:n.call(t,(function(e,t){return Object(C.jsx)(oe,{deleteImage:function(){return l.deleteImage(e,"Image")},item:e},t)})),Object(C.jsx)("div",{className:H.a.ImagePick,children:Object(C.jsx)(ee.a,{handleImageSelect:this.handleImageSelect,setImageSrc:function(e){return console.log("set",e)},style:{height:108,bottom:45,backgroundColor:"#000"}})})]})]}),Object(C.jsxs)("div",{style:{alignItems:"center",textAlign:"center",justifyContent:"center",width:"51.5%",alignSelf:"center"},children:[Object(C.jsx)(N,{width:"40%",label:"Area",value:function(e){return l.setState({Full_Name:e})}}),Object(C.jsx)(N,{income:function(e){return l.setState({income:e})},width:"40%",label:"Generetic Income",value:function(e){return l.setState({Full_Name:e})}})]}),Object(C.jsxs)("div",{className:H.a.picImage,children:[Object(C.jsx)("h1",{className:H.a.textLabel,children:"Copy of the Propety Deed"}),Object(C.jsxs)("div",{className:H.a.divpickImage,children:[null===this||void 0===this||null===(i=this.state)||void 0===i||null===(a=i.dataPropety_Deed)||void 0===a||null===(o=a.map)||void 0===o?void 0:o.call(a,(function(e,t){return Object(C.jsx)(oe,{deleteImage:function(){return l.deleteImage(e,"dataPropety_Deed")},item:e},t)})),Object(C.jsx)("div",{className:H.a.ImagePick,children:Object(C.jsx)(ee.a,{handleImageSelect:this.handledataPropety_DeedSelect,setImageSrc:function(e){return console.log("set",e)},style:{height:108,bottom:45,backgroundColor:"#000"}})})]})]}),Object(C.jsxs)("div",{className:H.a.devPercentage,children:[Object(C.jsx)("h1",{className:H.a.textLabel,children:"Tokenizing: Percentage of Ownership"}),Object(C.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",margin:0,padding:0},children:[Object(C.jsx)(N,{width:"20%",value:function(e){return l.setState({Full_Name:e})}}),Object(C.jsx)("p",{style:{marginTop:20,fontSize:12},children:"For"}),Object(C.jsx)(N,{income:function(e){return l.setState({income:e})},width:"20%",value:function(e){return l.setState({Full_Name:e})}})]})]}),Object(C.jsx)(f.a,{onClick:function(){return l.onClickLogin()},style:{backgroundColor:"#AE9B77",fontSize:"15px",width:"50%",marginbottom:20,color:"#fff",textAlign:"center",textTransform:"capitalize",marginTop:10,marginBottom:20},variant:"contained",children:"List Property"})]})]})}}]),n}(a.a.Component),se=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).componentDidMount=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),e.state={},e}return Object(u.a)(n,[{key:"render",value:function(){this.state.redirectToLogin;return Object(C.jsx)(j.a,{children:Object(C.jsxs)(g.c,{children:[Object(C.jsx)(g.a,{path:"/Create",component:le}),Object(C.jsx)(g.a,{path:"/Home",component:I}),Object(C.jsx)(g.a,{path:"/",component:S})]})})}}]),n}(i.Component);var re=function(){return Object(C.jsx)(se,{})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,540)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,l=t.getTTFB;n(e),i(e),a(e),o(e),l(e)}))};l.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(re,{})}),document.getElementById("root")),ce()},56:function(e,t,n){e.exports={continer:"style_continer__2VtCY",divCArdRow:"style_divCArdRow__7YWJq",ProgressBar:"style_ProgressBar__20v82",divProgressBar:"style_divProgressBar__2F_25",pReal:"style_pReal__3sqUt"}}},[[501,1,2]]]);
//# sourceMappingURL=main.50ba5ee8.chunk.js.map