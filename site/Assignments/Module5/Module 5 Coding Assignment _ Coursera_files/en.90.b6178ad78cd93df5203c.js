(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{"1Tsj":function(module,e,t){"use strict";t.r(e);var n=t("lSNA"),r=t.n(n),o=t("VbXa"),a=t.n(o),i=t("VkAN"),c=t.n(i),s=t("AeFk"),u=t("q1tI"),d=t.n(u),p=t("MnCE"),l=t("8cuT"),m=t("sQ/U"),g="onDemandSupplements.v1",b=t("K7Vu"),supplementData=function(e){var t=e.itemId,n=e.courseId,r=e.courseSlug,o,a={includes:["asset"],fields:["openCourseAssets.v1(typeName)","openCourseAssets.v1(definition)"]};return new b.a({itemId:t,courseId:n,courseSlug:r}).getWithCourseItemId(g,a).then((function(e){return e.linked["openCourseAssets.v1"][0]}))},I=t("8Hdl"),f=t("SJ7i"),h=t("7GkZ"),v={NAME:"NAME",USER_ID:"USER_ID",HASHED_USER_ID:"HASHED_USER_ID"},S=v,x=v.NAME,C=v.USER_ID,j=v.HASHED_USER_ID,O=t("hUuC"),k=t("h4VP"),E=t("vXr1"),A=t("15pW"),y=t("6/Gu"),L=t("ZJgU"),P=t("/szJ"),w=t("pVnL"),M=t.n(w),N=t("17x9"),R=t.n(N),T,D=function withFluxibleContextAsProps(){return function(e){var t;return(t=function(t){function Wrapper(){return t.apply(this,arguments)||this}var n;return a()(Wrapper,t),Wrapper.prototype.render=function render(){var t=this.context.executeAction;return(d.a.createElement(e,M()({},this.props,{executeAction:t})))},Wrapper}(d.a.Component)).displayName="withFluxibleContextAsProps(".concat(e.displayName||e.name||"Component",")"),t.contextTypes={executeAction:R.a.func},t}},U=t("S+eF"),B=t.n(U),V=t("TSOT"),H=Object(V.a)(A.d.supplementCompletionApi,{type:"rest"}),W=Object(V.a)(A.d.supplementStartApi,{type:"rest"});function updateSupplementProgress(e){var t=e.itemId,n=e.courseId,r=e.userId,o=e.api,a={data:{userId:r,courseId:n,itemId:t}};return B()(o.post("",a))}var J={markComplete:function markComplete(e,t,n){return updateSupplementProgress({itemId:e,courseId:t,userId:n,api:H})},markStarted:function markStarted(e,t,n){return updateSupplementProgress({itemId:e,courseId:t,userId:n,api:W})}},X=J,z=J.markComplete,F=J.markStarted,G=t("E4RX"),K=t("MC18"),q=t.n(K),Z,Q,Y,ee,te,ne,re={readingCompleteContainer:function readingCompleteContainer(e){return Object(s.c)(Z||(Z=c()(["\n    margin-top: ",";\n  "])),e.spacing(32))},completed:function completed(e){return Object(s.c)(Q||(Q=c()(["\n    "," {\n      flex-direction: column;\n      align-items: flex-start;\n    }\n  "])),e.breakpoints.down("xs"))},completedText:function completedText(e){return Object(s.c)(Y||(Y=c()(["\n    display: flex;\n    "," {\n      margin-top: ",";\n    }\n  "])),e.breakpoints.down("xs"),e.spacing(32))},text:function text(e){return Object(s.c)(ee||(ee=c()(["\n    margin-right: ",";\n    margin-left: ",";\n  "])),e.spacing(24),e.spacing(4))},nextItem:function nextItem(e){return Object(s.c)(te||(te=c()(["\n  "," {\n    margin-top: ",";\n"])),e.breakpoints.down("xs"),e.spacing(32))}},oe=function ReadingCompleteButton(e){var t=e.isComplete,n=e.nextItem,r=e.itemId,o=e.courseId,a=e.courseProgress,i=e.executeAction,c=Object(E.b)(),u=function markComplete(){var e;a.getItemProgress(r).setState(A.e),i(G.c,{courseProgress:a}),Object(G.b)(a.get("id"),a),X.markComplete(r,o,m.a.get().id).done()},d=function goToNextItem(){n&&c.push(n.getLink())};return Object(s.d)("div",{"data-testid":"reading-complete-container",css:re.readingCompleteContainer},t?Object(s.d)(y.a,{container:!0,direction:"row","data-testid":"completed",css:re.completed},Object(s.d)(y.a,{item:!0,alignItems:"center","data-testid":"completed-text",css:re.completedText},ne||(ne=Object(s.d)(P.a,{size:"large",color:"success","aria-hidden":!0})),Object(s.d)(I.a,{variant:"h3bold",color:"success",css:re.text},q()("Completed"))),!!n&&Object(s.d)(y.a,{item:!0},Object(s.d)(L.a,{"data-testid":"next-item",css:re.nextItem,variant:"primary",type:"submit",onClick:d},q()("Go to next item")))):Object(s.d)("div",null,Object(s.d)(L.a,{"data-testid":"mark-complete",variant:"primary",type:"submit",onClick:u},q()("Mark as completed"))))},ae=Object(p.compose)(D())(oe),ie=t("kDtP"),ce=t("Q/rb"),se=t("j0VE"),ue,de,pe,le;t.d(e,"ReadingItem",(function(){return ge}));var me={negativeMarginLeft:Object(s.c)({marginLeft:"-16px"}),title:function title(e){return Object(s.c)(ue||(ue=c()(["\n    margin-bottom: ",";\n    "," {\n      margin-bottom: ",";\n    }\n  "])),e.spacing(32),e.breakpoints.up("md"),e.spacing(48))},cmlRestyling:Object(s.c)(de||(de=c()(["\n    max-width: 790px;\n  "]))),body:function body(e){return Object(s.c)(pe||(pe=c()(["\n    margin-bottom: ",";\n  "])),e.spacing(48))}},ge=function(e){function ReadingItem(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={readingCml:null},t}a()(ReadingItem,e);var t=ReadingItem.prototype;return t.componentDidMount=function componentDidMount(){var e=this,t=this.props,n=t.computedItem,r=t.courseId,o=t.courseSlug,a=n.id;supplementData({itemId:a,courseId:r,courseSlug:o}).then((function(t){e.setState({readingCml:t})}))},t.renderExternalActions=function renderExternalActions(){var e=this.props,t=e.computedItem,n=e.courseId,r=e.courseSlug,o=e.branchId;return Object(s.d)("div",{css:me.negativeMarginLeft},Object(s.d)(se.a,{courseId:n,courseBranchId:o,itemId:t.id,courseSlug:r}))},t.renderTitle=function renderTitle(){var e=this.props,t=e.computedItem,n=e.theme,r=this.state.readingCml;if(!r)return null;var o=Object(k.e)(r);if(o&&Object(k.j)(o,"1")&&O.d.getInnerContent(o)===t.name)return null;return Object(s.d)("div",{className:"reading-title",css:me.title(n)},Object(s.d)(I.a,{variant:"d2",component:"h1"},t.name),this.renderExternalActions())},t.render=function render(){var e,t,n=this.props,o=n.computedItem,a=n.courseId,i=n.courseSlug,c=n.itemMetadata,u=n.courseMaterials,d=n.courseProgress,p=n.theme,l=this.state.readingCml,g=S.NAME,b=S.USER_ID,I=null==u?void 0:null===(e=u.getNeighbors(c))||void 0===e?void 0:e.nextItemMetadataOrItemGroup;return Object(s.d)(ce.a,{className:"rc-ReadingItem",feedbackType:"reading",computedItem:o,courseId:a,css:me.cmlRestyling},Object(s.d)("div",{css:me.body(p)},l?Object(s.d)("div",null,this.renderTitle(),Object(s.d)(h.a,{cml:l,isCdsEnabled:!0,shouldApplyTracking:!0,variableData:(t={},r()(t,g,m.a.get().fullName),r()(t,b,m.a.get().id),t)}),Object(s.d)(ae,{courseId:a,courseSlug:i,itemId:o.id,isComplete:o.isCompleted,nextItem:I,courseProgress:d})):le||(le=Object(s.d)(ie.a,null))))},ReadingItem}(d.a.Component),be=e.default=Object(p.compose)(Object(l.a)(["CourseStore","ProgressStore","SessionStore"],(function(e){var t=e.CourseStore,n=e.ProgressStore,r=e.SessionStore;return{courseId:t.getCourseId(),branchId:r.getBranchId()||t.getCourseId(),courseSlug:t.getCourseSlug(),courseMaterials:t.getMaterials(),courseProgress:n.courseProgress}})),f.a)(ge)},"24m0":function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"id":true,"ja":true,"ko":true,"pt":true,"ru":true,"uk":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},"8PY9":function(module,exports,e){e("nsE/")},MC18:function(module,exports,e){var t=e("24m0"),n=t.default?t.default:{},r,o=(0,e("HdzH").default)(n);o.getLocale=function(){return"en"},module.exports=o},j0VE:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),o=t("q1tI"),a=t.n(o),i=t("MnCE"),c=t("ZJgU"),s=t("KXbA"),u=t("G2Rf"),d=t("PamN"),p=t("9A5E"),l=t("NzvK"),m=t.n(l),g,b=function(e){function LabSandboxLauncherButton(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).handleClick=function(){var e=t.props.courseSlug,n=Object(d.c)(e);window.open(n,"_blank")},t}var t;return r()(LabSandboxLauncherButton,e),LabSandboxLauncherButton.prototype.render=function render(){var e=this.props,t=e.courseId,n=e.courseBranchId,r=e.itemId,o=e.ownsCourse,i=e.isFreeTrial;if(!Object(d.b)(t,n,r,o,i))return null;return(a.a.createElement("div",{className:"rc-LabSandboxLauncherButton"},a.a.createElement(c.a,{variant:"ghost",component:p.a,iconPosition:"before",trackingName:"lab_sandbox",href:"/learn/".concat(this.props.courseSlug,"/lab-sandbox"),target:"_blank",icon:g||(g=a.a.createElement(s.a,{size:"small"})),"aria-label":m()("open lab sandbox")},m()("Practice with Lab Sandbox"))))},LabSandboxLauncherButton}(o.Component);e.a=Object(i.compose)(u.a)(b)},kDtP:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),o=t("q1tI"),a=t.n(o),i=t("37kS"),c=t.n(i),s=t("8PY9"),u=t.n(s),d=function(e){function LoadingIndicator(){return e.apply(this,arguments)||this}var t;return r()(LoadingIndicator,e),LoadingIndicator.prototype.render=function render(){return a.a.createElement("div",{className:"rc-LoadingIndicator"},c()("Loading"))},LoadingIndicator}(a.a.Component);e.a=d},"nsE/":function(module,exports,e){}}]);
//# sourceMappingURL=en.90.b6178ad78cd93df5203c.js.map