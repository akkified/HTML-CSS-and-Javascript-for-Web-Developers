(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{F9YM:function(module,e,t){"use strict";t.d(e,"c",(function(){return c})),t.d(e,"e",(function(){return s})),t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return d})),t.d(e,"d",(function(){return g}));var n=t("wd/R"),r=t.n(n),a=1,o=function findCueIndexForTimeHelper(e,t,n,r){if(t>n)return-1;var a=n-Math.floor((n-t)/2);return r<e[a].startTime?findCueIndexForTimeHelper(e,t,a-1,r):a!==e.length-1&&r>=e[a+1].startTime?findCueIndexForTimeHelper(e,a+1,n,r):a},i=function findCueIndexForTime(e,t){return o(e,0,e.length-1,t)},c=function formatTime(e){var t="m:ss",n=1e3*e,a,o;return r.a.duration(n).hours()>0&&(t="h:m"+t),r.a.utc(n).locale("en").format(t)},s=function getTimeFromDuration(e){var t=1e3*e,n=r.a.duration(t),a=n.hours(),o=n.minutes(),i;return{seconds:n.seconds(),minutes:o,hours:a}},u=function buildParagraphs(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r,a,o;return e.forEach((function(e){a&&(o=e.startTime-a.endTime),(!r||o>=t)&&(r=[],n.push(r)),r.push(e),a=e})),n},d=function findCuesAroundTime(e,t){var n,r=e[i(e,t)];if(!r)return[];return[r]},l=function getSentenceCueIndices(e,t){for(var n=[],r=e-1;-1!==r;){var a=t[r];if("."===a.text[a.text.length-1])break;n.unshift(r),r-=1}for(var o=e;o<=t.length-1;){var i=t[o];if(n.push(o),"."===i.text[i.text.length-1])break;o+=1}return n},m=function getAdjancentCueIndices(e,t){var n=[],r=[];return e>=2&&r.push(e-2),e>=1&&r.push(e-1),e<t-1&&n.push(e+1),e<t-2&&n.push(e+2),[].concat(r,[e],n)},g=function getAdjacentCues(e,t,n){var r=i(e,t);if(-1===r&&e.length>2)return[0,1,2].map((function(t){return e[t]}));if(r<0||r>=e.length)return[];if("en"===n)return l(r,e).map((function(t){return e[t]}));return m(r,e.length).map((function(t){return e[t]}))}},GUMY:function(module,e,t){"use strict";var n=t("q1tI"),r=t.n(n),a=t("JYd8"),o=Object(a.a)("VideoIcon",{ltr:{small:function small(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z",fill:"currentColor"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.5 3.59L12.431 8 5.5 12.41V3.59zm1 1.82v5.18L10.569 8 6.5 5.41z",fill:"currentColor"}))},medium:function medium(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM.5 10a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z",fill:"currentColor"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.93 4.59L15.431 10 6.93 15.41V4.59zm1 1.82v7.18L13.569 10 7.93 6.41z",fill:"currentColor"}))},large:function large(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5zM.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12z",fill:"currentColor"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.36 5.589L18.431 12 8.36 18.411V5.589zm1 1.822v9.178L16.569 12 9.36 7.411z",fill:"currentColor"}))}}},!1);e.a=o},Ne6o:function(module,exports,e){var t=e("OIEB"),n=t.default?t.default:{},r,a=(0,e("HdzH").default)(n);a.getLocale=function(){return"en"},module.exports=a},OIEB:function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"id":true,"ja":true,"ko":true,"pt":true,"ru":true,"uk":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},VnuN:function(module,exports,e){},c5cO:function(module,e,t){"use strict";t.r(e);var n=t("VkAN"),r=t.n(n),a=t("J4zp"),o=t.n(a),i=t("AeFk"),c=t("q1tI"),s=t.n(c),u=t("HOoY"),d=t("kgYC"),l=t("8Hdl"),m=t("1HaE"),g=t("Ns7p"),p=t("4KRT"),f=t("lTCR"),h=t.n(f),v,b=h()(v||(v=r()(['\n  query VideoCourseMaterialsQuery($slug: String!) {\n    OnDemandCourseMaterialsV2 @naptime {\n      slug(slug: $slug, showHidden: true, includes: "modules") {\n        elements {\n          id\n          name\n        }\n        linked {\n          onDemandCourseMaterialModulesV1 {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n']))),x,N=function CourseContentDataProvider(e){var t=e.courseSlug,n=e.children;return(s.a.createElement(p.Query,{query:b,variables:{slug:t}},(function(e){var r,a=e.loading,o=e.error,i=e.data;if(o||a)return n({course:null,modules:null,error:!!o,loading:!!a});var c,s=((null==i?void 0:i.OnDemandCourseMaterialsV2)||{}).slug,u=null==s?void 0:null===(r=s.elements)||void 0===r?void 0:r[0].id,d=(s||{}).elements[0].name,l=((s||{}).linked||{}).onDemandCourseMaterialModulesV1;return n({course:{id:u,name:d,slug:t},modules:l,error:!1,loading:!1})})))},O=t("cVIm"),j=t("TOZ3"),T=t("CsdX"),I=t("wwtN"),S=t("8WNh"),y=t("Ne6o"),C=t.n(y),E=t("nS3k"),P,w="".concat(O.a.url.resource_assets,"learner/icon_note.svg"),D="".concat(O.a.url.resource_assets,"learner/icon_highlight.svg"),k,U=function NotesReviewPageDataState(e){var t=e.dataState;return(s.a.createElement(j.b,{"aria-live":"assertive","aria-atomic":!0,"aria-relevant":"text",rootClassName:"rc-NotesReviewPageDataState",flexDirection:"column",justifyContent:"start",alignItems:"center"},"error"===t&&[s.a.createElement(I.a,{key:"icon",size:84,color:T.b.error}),s.a.createElement("div",{key:"message",className:"data-state-message headline-5-text","aria-live":"assertive","aria-atomic":!0,"aria-relevant":"text"},C()("There was an issue loading your notes data. Please try refreshing the page."))],"loading"===t&&[P||(P=s.a.createElement(S.a,{key:"icon",size:84})),s.a.createElement("div",{key:"message",className:"data-state-message headline-5-text"},C()("Loading notes..."))],"empty"===t&&[s.a.createElement(j.b,{justifyContent:"center",rootClassName:"state-icons"},s.a.createElement("img",{src:w,alt:C()("Take notes"),className:"placeholder-icon"}),s.a.createElement("img",{src:D,alt:C()("Highlight"),className:"placeholder-icon"})),s.a.createElement("div",{"aria-live":"assertive","aria-atomic":!0,"aria-relevant":"text",key:"message",className:"data-state-message headline-5-text"},C()("You have not added any notes yet. Notes can be created from video pages."))]))},M=t("3tO9"),V=t.n(M),z=t("RIqP"),W=t.n(z),L=t("6/Gu"),F=t("ZJgU"),A=t("fsL8"),R=t.n(A),Q=t("yXPU"),H=t.n(Q),q=t("mDxB"),Y,B,J,G=function cloneData(e){return JSON.parse(JSON.stringify(e))},Z=h()(Y||(Y=r()(["\n  query NotesDataQuery($courseId: String!, $start: Int, $limit: Int) {\n    UserNotesV1 @naptime {\n      courseWithContentSort(courseId: $courseId, start: $start, limit: $limit) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n        paging\n      }\n    }\n  }\n"]))),X=function CourseNotesQueryProvider(e){var t=e.course,n=e.pageSize,r=e.children;return(s.a.createElement(p.Query,{query:Z,variables:{courseId:t.id,start:0,limit:n},notifyOnNetworkStatusChange:!0},(function(e){var t=e.loading,a=e.error,o=e.data,i=e.fetchMore;if(a)return r({notes:null,onLastPage:!1,error:!0,fetchNextPage:function(){var e=H()(R()().mark((function _callee(){return R()().wrap((function _callee$(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),_callee)})));function fetchNextPage(){return e.apply(this,arguments)}return fetchNextPage}(),loadingInitialPage:!1,loadingNextPage:!1});var c,s=((o||{}).UserNotesV1||{}).courseWithContentSort;if(t&&!(s||{}).elements)return r({notes:null,onLastPage:!1,error:!1,fetchNextPage:function(){var e=H()(R()().mark((function _callee2(){return R()().wrap((function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),_callee2)})));function fetchNextPage(){return e.apply(this,arguments)}return fetchNextPage}(),loadingInitialPage:!0,loadingNextPage:!1});var u=((s||{}).elements||[]).map(q.e),d=(s||{}).paging,l=!d||!d.next||d.total&&d.next>=d.total,m=function(){var e=H()(R()().mark((function _callee3(){return R()().wrap((function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i({variables:{start:u.length,limit:n},updateQuery:function updateQuery(e,t){var n=t.fetchMoreResult,r=G(e);if(!n)return r;var a=r;a.UserNotesV1.courseWithContentSort.elements=[].concat(W()(e.UserNotesV1.courseWithContentSort.elements),W()(n.UserNotesV1.courseWithContentSort.elements));var o=n.UserNotesV1.courseWithContentSort.paging;return a.UserNotesV1.courseWithContentSort.paging=o,a}});case 2:case"end":return e.stop()}}),_callee3)})));return function fetchNextPage(){return e.apply(this,arguments)}}();return u.length-n>=0&&(u[u.length-n].shouldFocusOn=!0),r({notes:u,fetchNextPage:m,onLastPage:l,error:!1,loadingInitialPage:!1,loadingNextPage:t})})))},K=h()(B||(B=r()(["\n  mutation DeleteNoteMutation($noteId: String!) {\n    UserNotesV1 @naptime {\n      delete(id: $noteId) {\n        id\n      }\n    }\n  }\n"]))),ee=function CourseNotesDeletionProvider(e){var t=e.course,n=e.pageSize,r=e.children;return(s.a.createElement(p.Mutation,{mutation:K},(function(e){var a;return r({deleteNote:function deleteNote(r){e({variables:{noteId:r},update:function update(e){var a=e.readQuery({query:Z,variables:{courseId:t.id,start:0,limit:n}}),o=G(a),i,c,s,u=((((a||{}).UserNotesV1||{}).courseWithContentSort||{}).elements||[]).filter((function(e){return e.id!==r})),d=o;d.UserNotesV1.courseWithContentSort.elements=u,e.writeQuery({query:Z,variables:{courseId:t.id,start:0,limit:n},data:d})}})}})})))},te=h()(J||(J=r()(["\n  mutation UpdateNoteMutation($noteId: String!, $noteDraft: DataMap!) {\n    UserNotesV1 @naptime {\n      update(id: $noteId, input: $noteDraft) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n      }\n    }\n  }\n"]))),ne=function CourseNotesUpdateProvider(e){var t=e.children;return(s.a.createElement(p.Mutation,{mutation:te},(function(e){var n;return t({updateNote:function updateNote(t,n){e({variables:{noteId:t,noteDraft:n}})}})})))},re,ae=function CourseNotesDataProvider(e){var t=e.course,n=e.pageSize,r=e.children;return(s.a.createElement(X,{course:t,pageSize:n},(function(e){var a=e.notes,o=e.fetchNextPage,i=e.error,c=e.loadingInitialPage,u=e.loadingNextPage,d=e.onLastPage;return(s.a.createElement(ee,{course:t,pageSize:n},(function(e){var t=e.deleteNote;return(s.a.createElement(ne,null,(function(e){var n=e.updateNote;return r({notes:a,onLastPage:d,fetchNextPage:o,deleteNote:t,updateNote:n,error:i,loadingInitialPage:c,loadingNextPage:u})})))})))})))},oe,ie,ce,se=function cloneData(e){return JSON.parse(JSON.stringify(e))},ue=h()(oe||(oe=r()(["\n  query NotesModuleQuery($courseId: String!, $moduleId: String!, $start: Int, $limit: Int) {\n    UserNotesV1 @naptime {\n      courseModuleWithContentSort(courseId: $courseId, moduleId: $moduleId, start: $start, limit: $limit) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n        paging\n      }\n    }\n  }\n"]))),de=function ModuleNotesQueryProvider(e){var t=e.course,module=e.module,n=e.pageSize,r=e.children;return(s.a.createElement(p.Query,{query:ue,variables:{courseId:t.id,moduleId:module.id,start:0,limit:n},notifyOnNetworkStatusChange:!0},(function(e){var t=e.loading,a=e.error,o=e.data,i=e.fetchMore;if(a)return r({notes:null,onLastPage:!1,fetchNextPage:function(){var e=H()(R()().mark((function _callee(){return R()().wrap((function _callee$(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),_callee)})));function fetchNextPage(){return e.apply(this,arguments)}return fetchNextPage}(),error:!0,loadingInitialPage:!1,loadingNextPage:!1});if(t&&!(((o||{}).UserNotesV1||{}).courseModuleWithContentSort||{}).elements)return r({notes:null,onLastPage:!1,fetchNextPage:function(){var e=H()(R()().mark((function _callee2(){return R()().wrap((function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),_callee2)})));function fetchNextPage(){return e.apply(this,arguments)}return fetchNextPage}(),error:!1,loadingInitialPage:!0,loadingNextPage:!1});var c,s=((o||{}).UserNotesV1||{}).courseModuleWithContentSort,u=((s||{}).elements||[]).map(q.e),d=(s||{}).paging,l=!d||!d.next||d.total&&d.next>=d.total,m=function(){var e=H()(R()().mark((function _callee3(){return R()().wrap((function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i({variables:{start:u.length,limit:n},updateQuery:function updateQuery(e,t){var n=t.fetchMoreResult,r=se(e);if(!n)return r;var a=r;a.UserNotesV1.courseModuleWithContentSort.elements=[].concat(W()(e.UserNotesV1.courseModuleWithContentSort.elements),W()(n.UserNotesV1.courseModuleWithContentSort.elements));var o=n.UserNotesV1.courseModuleWithContentSort.paging;return a.UserNotesV1.courseModuleWithContentSort.paging=o,a}});case 2:case"end":return e.stop()}}),_callee3)})));return function fetchNextPage(){return e.apply(this,arguments)}}();return u.length-n>=0&&(u[u.length-n].shouldFocusOn=!0),r({notes:u,fetchNextPage:m,onLastPage:l,error:!1,loadingInitialPage:!1,loadingNextPage:!!t})})))},le=h()(ie||(ie=r()(["\n  mutation DeleteNoteMutation($noteId: String!) {\n    UserNotesV1 @naptime {\n      delete(id: $noteId) {\n        id\n      }\n    }\n  }\n"]))),me=function ModuleNotesDeletionProvider(e){var t=e.course,module=e.module,n=e.pageSize,r=e.children;return(s.a.createElement(p.Mutation,{mutation:le},(function(e){var a;return r({deleteNote:function deleteNote(r){e({variables:{noteId:r},update:function update(e){var a=e.readQuery({query:ue,variables:{courseId:t.id,moduleId:module.id,start:0,limit:n}}),o=se(a),i,c,s,u=((((a||{}).UserNotesV1||{}).courseModuleWithContentSort||{}).elements||[]).filter((function(e){return e.id!==r})),d=o;d.UserNotesV1.courseModuleWithContentSort.elements=u,e.writeQuery({query:ue,variables:{courseId:t.id,moduleId:module.id,start:0,limit:n},data:d})}})}})})))},ge=h()(ce||(ce=r()(["\n  mutation UpdateNoteMutation($noteId: String!, $noteDraft: DataMap!) {\n    UserNotesV1 @naptime {\n      update(id: $noteId, input: $noteDraft) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n      }\n    }\n  }\n"]))),pe=function ModuleNotesUpdateProvider(e){var t=e.children;return(s.a.createElement(p.Mutation,{mutation:ge},(function(e){var n;return t({updateNote:function updateNote(t,n){e({variables:{noteId:t,noteDraft:n}})}})})))},fe,he=function ModuleNotesDataProvider(e){var t=e.course,module=e.module,n=e.pageSize,r=e.children;return(s.a.createElement(de,{course:t,module:module,pageSize:n},(function(e){var a=e.notes,o=e.fetchNextPage,i=e.error,c=e.loadingInitialPage,u=e.loadingNextPage,d=e.onLastPage;return(s.a.createElement(me,{course:t,module:module,pageSize:n},(function(e){var t=e.deleteNote;return(s.a.createElement(pe,null,(function(e){var n=e.updateNote;return r({notes:a,onLastPage:d,fetchNextPage:o,deleteNote:t,updateNote:n,error:i,loadingInitialPage:c,loadingNextPage:u})})))})))})))},ve,be=function ContentNotesDataProvider(e){var t=e.contentType,n=e.course,module=e.module,r=e.pageSize,a=void 0===r?10:r,o=e.children;if("module"===t)return module?s.a.createElement(he,{course:n,module:module,pageSize:a},(function(e){return o(e)})):null;return(s.a.createElement(ae,{course:n,pageSize:a},(function(e){return o(e)})))},xe=t("p6CZ"),Ne,Oe,je=function Divider(){var e=Object(d.a)();return Object(i.d)("div",{css:Object(i.c)(Ne||(Ne=r()(["\n        width: 100%;\n        margin: ",";\n        border-top: 1px solid ",";\n      "])),e.spacing(24,0),e.palette.gray[300])})},Te=t("F9YM"),Ie,Se,ye,Ce;!function(e){e[e.VIEW=0]="VIEW",e[e.EDIT=1]="EDIT",e[e.DELETE=2]="DELETE"}(Ie||(Ie={}));var Ee,Pe=function NoteDelete(e){var t=e.setCurrentState,n=e.onDelete,a=e.text,o=e.note,c=Object(d.a)(),u=Object(Te.c)(o.noteStartTs),m=o.noteEndTs?Object(Te.c)(o.noteEndTs):"",g=o.itemName;return Object(i.d)(s.a.Fragment,null,a&&Object(i.d)(s.a.Fragment,null,Object(i.d)(l.a,{component:"p",css:Object(i.c)(Se||(Se=r()(["\n              margin: ",";\n            "])),c.spacing(16,0,8)),variant:"h3semibold"},C()("Your Notes")),Object(i.d)(l.a,{variant:"body1"},a)),Object(i.d)(L.a,{container:!0,alignItems:"flex-end",css:{flexGrow:1}},Object(i.d)(L.a,{item:!0,container:!0,justifyContent:"flex-start",alignItems:"center"},Object(i.d)(L.a,{item:!0,css:{margin:c.spacing(16,32,0,0)}},Object(i.d)(l.a,{variant:"body1","aria-live":"polite"},C()("Are you sure you want to delete the entire note?"))),Object(i.d)(L.a,{item:!0,container:!0,css:Object(i.c)(ye||(ye=r()(["\n              flex-basis: 0;\n              flex-wrap: nowrap;\n              margin: ",";\n            "])),c.spacing(16,0,0))},Object(i.d)(L.a,{item:!0,css:Object(i.c)(Ce||(Ce=r()(["\n                margin: ",";\n              "])),c.spacing(0,16,0,0))},Object(i.d)(F.a,{onClick:function onClick(){n(),t(Ie.VIEW)},size:"small",variant:"primary","aria-label":C()("Delete your notes for #{itemName} from time #{noteStartTimestamp} to #{noteEndTimestamp}",{itemName:g,noteStartTimestamp:u,noteEndTimestamp:m})},C()("Delete"))),Object(i.d)(L.a,{item:!0},Object(i.d)(F.a,{onClick:function onClick(){return t(Ie.VIEW)},size:"small",variant:"secondary","aria-label":C()("Cancel deleting your notes for #{itemName} from time #{noteStartTimestamp} to #{noteEndTimestamp}",{itemName:g,noteStartTimestamp:u,noteEndTimestamp:m})},C()("Cancel")))))))},we,De,ke,Ue=function NoteEdit(e){var t=e.setCurrentState,n=e.text,a=e.onSave,u=Object(d.a)(),m=Object(c.useState)(n),g=o()(m,2),p=g[0],f=g[1],h=n.split(" ",20).join(" ");return Object(i.d)(s.a.Fragment,null,Object(i.d)(l.a,{component:"p",css:Object(i.c)(we||(we=r()(["\n          margin: ",";\n        "])),u.spacing(16,0,8)),variant:"h3semibold"},C()("Your Notes")),Object(i.d)("textarea",{"aria-label":C()("Your Notes"),autoFocus:!0,css:V()({width:"100%",maxHeight:"175px",overflowY:"scroll",margin:u.spacing(0,0,0),padding:u.spacing(16),border:"1px solid ".concat(u.palette.gray[500]),borderRadius:2},u.typography.body1),id:"edit-note",defaultValue:p,onChange:function onChange(e){return f(e.target.value)},rows:3}),Object(i.d)(L.a,{container:!0,justifyContent:"flex-start",css:{margin:u.spacing(16,0,0)}},Object(i.d)(L.a,{item:!0},Object(i.d)(F.a,{onClick:function onClick(){a(p),t(Ie.VIEW)},size:"small",variant:"primary","aria-label":C()("Save your notes for #{text}",{text:h})},C()("Save"))),Object(i.d)(L.a,{item:!0},Object(i.d)(F.a,{css:Object(i.c)(De||(De=r()(["\n              margin: ",";\n            "])),u.spacing(0,0,0,16)),onClick:function onClick(){return t(Ie.VIEW)},size:"small",variant:"secondary","aria-label":C()("Cancel editing notes for #{text}",{text:h})},C()("Cancel")))))},Me=t("9A5E"),Ve=t("GUMY"),_e=t("fAYU"),ze=t("gNwb"),We=t("Ys1X"),$e,Le,Fe,Ae,Re,Qe,He,qe,Ye,Be=function formatNoteClipDescription(e){var t=e.noteStartTs,n=e.noteEndTs,r=e.captureTs;if(t&&n)return"".concat(Object(Te.c)(t)," - ").concat(Object(Te.c)(n));return"".concat(Object(Te.c)(r))},Je=function constructItemLink(e,t,n){return"".concat(Object(We.c)(e),"/lecture/").concat(t,"?t=").concat(Math.trunc(n))},Ge=function VideoSnapshot(e){var t=e.snapshotUrl,n=Object(d.a)(),a=Object(i.c)($e||($e=r()(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0;\n    background: ",";\n    transition: opacity 0.2s linear;\n    :hover {\n      opacity: 0.6;\n    }\n  "])),n.palette.black[500]),o=Object(i.c)(Le||(Le=r()(["\n    top: 50%;\n    left: 50%;\n    position: absolute;\n    transform: translate(-50%, -50%);\n  "])));return Object(i.d)("div",{css:Object(i.c)(Fe||(Fe=r()(["\n        width: 197px;\n        position: relative;\n      "])))},Object(i.d)("div",{css:a},Object(i.d)(l.a,{color:"invertBody",css:o},C()("Go to video"))),Object(i.d)("img",{css:Object(i.c)(Ae||(Ae=r()(["\n          width: 100%;\n          border: 1px solid ",";\n        "])),n.palette.gray[400]),src:t,alt:"note"}))},Ze=Object(ze.d)({type:"BUTTON"})(_e.a),Xe,Ke=function NoteInformation(e){var t,n,a=e.note,o=e.course,c=Object(d.a)();return Object(i.d)(s.a.Fragment,null,Object(i.d)(L.a,{container:!0,alignItems:"center",wrap:"nowrap"},!a.snapshotUrl&&Object(i.d)("div",{css:Object(i.c)(Re||(Re=r()(["\n              flex-shrink: 0;\n              height: ",";\n            "])),c.spacing(24))},Qe||(Qe=Object(i.d)(Ve.a,{size:"large"}))),Object(i.d)("div",{css:Object(i.c)(He||(He=r()(["\n            margin: ",";\n          "])),c.spacing(0,0,0,a.snapshotUrl?0:8))},a.snapshotUrl&&Object(i.d)("div",{"data-e2e":"snapshot-container",css:Object(i.c)(qe||(qe=r()(["\n                margin: ",";\n              "])),c.spacing(0,0,16,0))},Object(i.d)(Me.a,{trackingName:"highlight_link",data:{itemId:a.itemId},href:Je(o.slug,null!==(t=a.itemId)&&void 0!==t?t:"",a.noteStartTs),target:"_blank",role:"link",rel:"noopener noreferrer"},Object(i.d)(Ge,{snapshotUrl:a.snapshotUrl}))),Object(i.d)(Ze,{variant:"quiet",trackingName:"highlight_link",trackingData:{itemId:a.itemId},href:Je(o.slug,null!==(n=a.itemId)&&void 0!==n?n:"",a.noteStartTs),target:"_blank",role:"link",rel:"noopener noreferrer",typographyVariant:"body1"},a.itemName))),Object(i.d)(l.a,{css:Object(i.c)(Ye||(Ye=r()(["\n          margin: ",";\n\n          "," {\n            margin: ",";\n          }\n        "])),c.spacing(4,0,0,a.snapshotUrl?0:32),c.breakpoints.down("sm"),c.spacing(4,0,16,a.snapshotUrl?0:32)),variant:"body2",color:"supportText","aria-label":C()("Duration"),dir:"ltr"},Be(a)))},et=t("UIee"),tt=t("rGs/"),nt,rt,at,ot,it,ct,st=function NoteView(e){var t=e.text,n=e.setCurrentState,a=e.note,o=Object(d.a)(),c=function formatAriaLabelForButton(e){var t=a.itemName,n=Object(Te.c)(a.noteStartTs),r=a.noteEndTs?Object(Te.c)(a.noteEndTs):"",o="";return o=t?"EDIT"===e?r?C()("Edit your notes for #{videoName} from time #{videoNoteStartTimestamp} to #{videoNoteEndTimestamp}",{videoName:t,videoNoteStartTimestamp:n,videoNoteEndTimestamp:r}):C()("Edit your notes for #{videoName} from time #{videoNoteStartTimestamp}",{videoName:t,videoNoteStartTimestamp:n}):r?C()("Delete your notes for #{videoName} from time #{videoNoteStartTimestamp} to #{videoNoteEndTimestamp}",{videoName:t,videoNoteStartTimestamp:n,videoNoteEndTimestamp:r}):C()("Delete your notes for #{videoName} from time #{videoNoteStartTimestamp}",{videoName:t,videoNoteStartTimestamp:n}):"EDIT"===e?C()("Edit your notes"):C()("Delete your notes")};return Object(i.d)(s.a.Fragment,null,t&&Object(i.d)(s.a.Fragment,null,Object(i.d)(l.a,{component:"p",css:Object(i.c)(nt||(nt=r()(["\n              margin: ",";\n            "])),o.spacing(16,0,8)),variant:"h3semibold","data-e2e":"video-note-label"},C()("Your Notes")),Object(i.d)(l.a,{variant:"body1","data-e2e":"video-note-text"},t)),Object(i.d)(L.a,{container:!0,alignItems:"flex-end",css:{flexGrow:1}},Object(i.d)(L.a,{container:!0,justifyContent:"flex-start",css:{margin:o.spacing(16,0,0)}},Object(i.d)(L.a,{item:!0,css:Object(i.c)(rt||(rt=r()(["\n              /* Required to align the text in the button correctly with the rest of the notes */\n              margin-left: -8px;\n            "])))},Object(i.d)(F.a,{icon:at||(at=Object(i.d)(et.a,{size:"small"})),iconPosition:"before",onClick:function onClick(){return n(Ie.EDIT)},size:"small",variant:"ghost","aria-label":c("EDIT")},C()("Edit"))),Object(i.d)(L.a,{css:Object(i.c)(ot||(ot=r()(["\n              margin: ",";\n            "])),o.spacing(0,0,0,16)),item:!0},Object(i.d)(F.a,{icon:it||(it=Object(i.d)(tt.a,{size:"small"})),iconPosition:"before",onClick:function onClick(){return n(Ie.DELETE)},size:"small",variant:"ghost","aria-label":c("DELETE")},C()("Delete"))))))},ut,dt,lt,mt=Object(c.forwardRef)((function(e,t){var n=e.note,a=e.course,s=e.onSave,u=e.onDelete,m=Object(c.useState)(Ie.VIEW),g=o()(m,2),p=g[0],f=g[1],h=Object(d.a)(),v=n.itemName,b=Object(Te.c)(n.noteStartTs),x=n.noteEndTs?Object(Te.c)(n.noteEndTs):"";return Object(i.d)("li",{css:Object(i.c)(ut||(ut=r()(["\n        width: 100%;\n        list-style: none;\n      "]))),ref:t},dt||(dt=Object(i.d)(je,null)),Object(i.d)(L.a,{container:!0,"data-e2e":"note-card"},Object(i.d)(L.a,{item:!0,xs:12,sm:5,md:5,lg:4,xl:3,css:{padding:h.spacing(0,32,0,0)}},Object(i.d)(Ke,{note:n,course:a})),Object(i.d)(L.a,{item:!0,xs:12,sm:7,md:7,lg:8,xl:9},Object(i.d)(L.a,{container:!0,direction:"column",css:{height:"100%"}},Object(i.d)(L.a,{item:!0,css:{marginLeft:h.spacing(4)}},Object(i.d)(l.a,{variant:"body1","data-e2e":"video-section-text"},n.transcriptText)),p===Ie.VIEW&&Object(i.d)(st,{setCurrentState:f,text:n.noteText,note:n}),p===Ie.EDIT&&Object(i.d)(Ue,{setCurrentState:f,text:n.noteText,onSave:function onSave(e){return s(n.id,e)}}),p===Ie.DELETE&&Object(i.d)(Pe,{setCurrentState:f,onDelete:function onDelete(){return u(n.id)},note:n,text:x?C()("#{itemName} from time #{noteStartTimestamp} to #{noteEndTimestamp}",{itemName:v,noteStartTimestamp:b,noteEndTimestamp:x}):C()("#{itemName} from time #{noteStartTimestamp}",{itemName:v,noteStartTimestamp:b})})))))})),gt,pt,ft,ht,vt,bt=20,xt=function partialSortByTimestamp(e,t,n){var r=e.slice(0,t),a=e.slice(n),o=e.slice(t,n).sort(q.a);return e.length=0,e.push.apply(e,W()(r.concat(o).concat(a))),e},Nt=function sortByTimestampWithinModule(e){for(var t=0,n=t+1;n<e.length;){for(;n<e.length&&e[n].itemName===e[n-1].itemName;)n+=1;e=xt(e,t,n),n=(t=n)+1}return e},Ot=function useHookWithRefCallback(){var e=Object(c.useRef)(null),t;return[Object(c.useCallback)((function(t){var n;t&&t.querySelectorAll("a")[0].focus();e.current=t}),[])]},jt=function NoteList(e){var t=Ot(),n,a=o()(t,1)[0];return Object(i.d)(be,{pageSize:20,contentType:e.module?"module":"course",course:e.course,module:e.module},(function(t){var n=t.notes,o=t.onLastPage,c=t.fetchNextPage,u=t.error,d=t.loadingInitialPage,l=t.loadingNextPage,m=t.updateNote,g=t.deleteNote;if(u)return gt||(gt=Object(i.d)(U,{dataState:"error"}));if(d)return pt||(pt=Object(i.d)(U,{dataState:"loading"}));if(!n||0===n.length)return ft||(ft=Object(i.d)(U,{dataState:"empty"}));var p=Nt(n);return Object(i.d)(s.a.Fragment,null,Object(i.d)("ul",{css:Object(i.c)(ht||(ht=r()(["\n                margin: 0;\n                padding: 0;\n              "])))},p.map((function(t){return Object(i.d)(mt,{course:e.course,key:t.id,note:t,onSave:function onSave(n,r){var a;m(n,Object(xe.d)({itemId:t.itemId,courseId:e.course.id,highlight:V()(V()({},t),{},{noteText:null!==(a=null!=r?r:t.noteText)&&void 0!==a?a:""}),languageCode:t.languageCode}))},onDelete:function onDelete(e){return g(e)},ref:t.shouldFocusOn?a:void 0})}))),vt||(vt=Object(i.d)(je,null)),!o&&Object(i.d)(L.a,{container:!0,justifyContent:"center"},Object(i.d)(F.a,{variant:"secondary",disabled:l,onClick:c},l?C()("Loading Notes..."):C()("See More Notes"))))}))},Tt=t("rzCt"),It=t("fguj"),St,yt,Ct=function FilterDropdownItem(e){var t=e.content,n=t&&"course"!==t.contentType?t.name:C()("All notes");return Object(i.d)("div",{css:Object(i.c)(St||(St=r()(["\n        width: 100%;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n      "])))},n)},Et,Pt=function NotesPageFilterDropdown(e){var t=e.course,n=e.modules,a=e.selectedContentId,o=e.onSelect,c=void 0===o?function(){}:o,s=Object(d.a)(),u=a||t.id,l=V()({contentType:"course"},t),m=n.map((function(module){return V()({contentType:"module"},module)})),g=[l].concat(W()(m));return Object(i.d)("div",{css:Object(i.c)(yt||(yt=r()(["\n        margin: ",";\n        "," {\n          max-width: 306px;\n        }\n      "])),s.spacing(12,0,24),s.breakpoints.up("sm")),className:"rc-NotesPageFilterDropdown"},Object(i.d)(Tt.a,{label:C()("Filter"),value:u,onChange:function onChange(e){return c(e.target.value)},fullWidth:!0},g.map((function(e){return Object(i.d)(It.a,{key:e.id,value:e.id},Object(i.d)(Ct,{content:e}))}))))},wt,Dt,kt,Ut;t.d(e,"NotesReviewPageWithCourseData",(function(){return Mt}));var Mt=function NotesReviewPageWithCourseData(e){var t=Object(c.useState)(),n=o()(t,2),a=n[0],u=n[1];s.a.useEffect((function(){g.a.get("LearnerNotesPendoSampleIncluded")&&Object(m.a)()}),[]);var p=Object(d.a)();return Object(i.d)("div",{css:Object(i.c)(wt||(wt=r()(["\n        "," {\n          margin: ",";\n        }\n\n        "," {\n          margin: ",";\n        }\n\n        a:focus {\n          outline-offset: 2px;\n        }\n\n        /* \n          We are setting the typography of components that are not yet migrated to CDS and that are still being used by the original page \n          We don't want to override the font if the rest of the page is not using CDS\n        */\n        .rc-NotesReviewPageDataState * {\n          ",";\n        }\n        .rc-NotesReviewPageDataState {\n          margin: ",";\n        }\n      "])),p.breakpoints.up("md"),p.spacing(32,48),p.breakpoints.down("sm"),p.spacing(16,0),p.typography.h2,p.spacing(48,0,0))},Object(i.d)(l.a,{variant:"h1semibold",css:Object(i.c)(Dt||(Dt=r()(["\n          margin: ",";\n          "," {\n            margin: ",";\n          }\n        "])),p.spacing(0,0,48),p.breakpoints.down("sm"),p.spacing(0,0,32))},C()("Notes")),Object(i.d)(Pt,{modules:e.modules,course:e.course,selectedContentId:a,onSelect:u}),Object(i.d)(jt,{course:e.course,module:e.modules.find((function(e){return e.id===a}))||null}))},Vt=u.a.createTrackedContainer((function(e){var t;return{namespace:{page:"notes_review"},courseId:e.course.id}}))(Mt),_t=function NotesReviewPage(e){var t=e.params.courseSlug;return Object(i.d)(N,{courseSlug:t},(function(e){var t=e.course,n=e.modules,r=e.error,a=e.loading;if(r)return kt||(kt=Object(i.d)(U,{dataState:"error"}));if(a)return Ut||(Ut=Object(i.d)(U,{dataState:"loading"}));return Object(i.d)(Vt,{course:t,modules:n})}))},zt=e.default=_t},mDxB:function(module,e,t){"use strict";t.d(e,"e",(function(){return g})),t.d(e,"f",(function(){return p})),t.d(e,"b",(function(){return f})),t.d(e,"c",(function(){return h})),t.d(e,"a",(function(){return v})),t.d(e,"d",(function(){return b}));var n=t("fsL8"),r=t.n(n),a=t("yXPU"),o=t.n(a),i=t("fw5G"),c=t.n(i),s=t("DnuM"),u=t("sQ/U"),d=t("p6CZ"),l=Object(s.a)("/api/userNotes.v1",{type:"rest"}),m=function(){var e=o()(r()().mark((function _callee(e,t,n,a,o){var i,u,m,g,p;return r()().wrap((function _callee$(r){for(;;)switch(r.prev=r.next){case 0:return i=(new c.a).addQueryParam("action","getScreenShotUploadUrlV2").addQueryParam("courseId",e).addQueryParam("itemId",t).addQueryParam("userId",a).addQueryParam("timestamp",n),r.next=3,l.post(i.toString());case 3:return u=r.sent,m=u.split("?")[0],g=Object(d.c)(o),p=Object(s.a)(u,{type:"rest"}),r.next=9,p.put("",{contentType:"image/png",data:g,processData:!1});case 9:return r.abrupt("return",m);case 10:case"end":return r.stop()}}),_callee)})));return function uploadSnapshot(t,n,r,a,o){return e.apply(this,arguments)}}(),g=function reshapeHighlightForClient(e){var t=e.id,n=e.createdAt,r=e.updatedAt,a=e.userText,o=e.shouldFocusOn,i=e.details.definition,c=i.noteEndTs,s=i.noteStartTs,u=i.captureTs,d=i.snapshotUrl,l=i.transcriptTextStartIndex,m=i.transcriptTextEndIndex,g=i.transcriptText,p,f,h;return{id:t,itemId:i.itemId,itemName:i.itemName,clientId:t,createdAt:n,updatedAt:r,languageCode:i.languageCode,noteText:a,noteEndTs:c&&c/1e3,noteStartTs:s&&s/1e3,captureTs:u&&u/1e3,snapshotUrl:d,transcriptTextStartIndex:l,transcriptTextEndIndex:m,transcriptText:g,pendingCreate:!1,pendingUpdate:!1,shouldFocusOn:o}},p=function updateHighlight(e){var t=e.itemId,n=e.courseId,r=e.languageCode,a=e.id,o=e.highlight,i=new c.a(a),s=Object(d.d)({itemId:t,courseId:n,highlight:o,languageCode:r});return l.put(i.toString(),{data:s})},f=function(){var e=o()(r()().mark((function _callee2(e){var t,n,a,o,i,c,s,g;return r()().wrap((function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:if(t=e.itemId,n=e.courseId,a=e.languageCode,o=e.highlight,i=Object(d.d)({itemId:t,courseId:n,highlight:o,languageCode:a}),c=u.a.get().id,!o.snapshotDataUrl){r.next=8;break}return r.next=6,m(n,t,i.details.definition.noteStartTs,c,o.snapshotDataUrl);case 6:s=r.sent,i.details.definition.snapshotUrl=s;case 8:return r.next=10,l.post("",{data:i});case 10:return g=r.sent,r.abrupt("return",g.elements[0].id);case 12:case"end":return r.stop()}}),_callee2)})));return function createHighlight(t){return e.apply(this,arguments)}}(),h=function deleteHighlight(e){var t=e.id,n=new c.a(t);return l.delete(n.toString())},v=function compareHighlightsByStartTimestamp(e,t){if(e.noteStartTs<t.noteStartTs)return-1;if(e.noteStartTs>t.noteStartTs)return 1;return 0},b=function(){var e=o()(r()().mark((function _callee3(e){var t,n,a,o,i;return r()().wrap((function _callee3$(r){for(;;)switch(r.prev=r.next){case 0:return t=e.itemId,n=e.courseId,a=e.languageCode,o=(new c.a).addQueryParam("itemId",t).addQueryParam("courseId",n).addQueryParam("languageCode",a).addQueryParam("q","courseItemLanguageCode").addQueryParam("fields","id, userText, createdAt, updatedAt, details"),r.next=4,l.get(o.toString());case 4:return i=r.sent,r.abrupt("return",i.elements.map(g).sort(v));case 6:case"end":return r.stop()}}),_callee3)})));return function getHighlights(t){return e.apply(this,arguments)}}(),x=function(){var e=o()(r()().mark((function _callee4(e){var t,n,a,o;return r()().wrap((function _callee4$(r){for(;;)switch(r.prev=r.next){case 0:return n=e.courseId,a=(new c.a).addQueryParam("courseId",n).addQueryParam("q","course").addQueryParam("fields","id, userText, createdAt, updatedAt, details"),r.next=4,l.get(a.toString());case 4:return o=r.sent,r.abrupt("return",null==o?void 0:null===(t=o.elements)||void 0===t?void 0:t.map(g));case 6:case"end":return r.stop()}}),_callee4)})));return function getCourseHighlights(t){return e.apply(this,arguments)}}()},nS3k:function(module,exports,e){e("VnuN")},p6CZ:function(module,e,t){"use strict";var n=t("k8gO"),r=t("F9YM"),createSnapshot=function(e){var t=document.createElement("canvas");t.width=960,t.height=540;var n=e.el().querySelector("video"),r=t.getContext("2d");return r&&n&&r.drawImage(n,0,0,t.width,t.height),t.toDataURL("image/jpeg")};t.d(e,"c",(function(){return a})),t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return i})),t.d(e,"d",(function(){return c}));var a=function getBlobFromDataURI(e){for(var t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(t.length),a=new Uint8Array(r),o=0;o<t.length;o+=1)a[o]=t.charCodeAt(o);return new Blob([r],{type:n})},o=function generateHighlightFromTranscriptSelection(e,t){var r=e.transcriptTextStartIndex,a=e.transcriptTextEndIndex,o=t.cues.filter((function(e){return e.index>=r.cueIndex&&e.index<=a.cueIndex})),i=o.reduce((function(e,t){var n=t.index,o=t.text,i=r.cueIndex,c=r.textIndex,s=a.cueIndex,u=a.textIndex;if(n===i){if(n===s)return"".concat(e).concat(o.substring(c,u+1));return"".concat(e).concat(o.substring(c))}if(n===s)return"".concat(e," ").concat(o.substring(0,u+1));return"".concat(e," ").concat(o)}),""),c=Object(n.a)(),s=c,u=o[0],d,l=o[o.length-1].endTime,m,g,p="",f=!0,h=!1,v;return{id:c,clientId:s,captureTs:u.startTime,noteStartTs:u.startTime,noteEndTs:l,transcriptText:i,noteText:"",languageCode:t.languageCode,transcriptTextStartIndex:r,transcriptTextEndIndex:a,pendingCreate:!0,pendingUpdate:!1}},i=function generateHighlightFromCaptureButton(e,t){var a=Object(n.a)(),o=a,i="",c=e.languageCode,s=t.currentTime(),u=Object(r.d)(e.cues,s,c),d=u[0],l=u[u.length-1],m=u.reduce((function(e,t){if(t.index===d.index)return"".concat(e).concat(t.text);return"".concat(e," ").concat(t.text)}),""),g={textIndex:0,cueIndex:d.index},p={textIndex:l.text.length-1,cueIndex:l.index},f=l.endTime,h,v=!0,b=!1,x;return{id:a,clientId:o,captureTs:s,noteStartTs:d.startTime,noteEndTs:f,transcriptText:m,noteText:"",languageCode:c,transcriptTextStartIndex:g,transcriptTextEndIndex:p,snapshotDataUrl:createSnapshot(t),pendingCreate:!0,pendingUpdate:!1}},c=function getDraftFromHighlight(e){var t=e.itemId,n=e.courseId,r=e.highlight,a=e.languageCode,o=r.noteStartTs,i=r.noteEndTs,c=r.captureTs,s=r.snapshotUrl,u=r.transcriptText,d=r.noteText,l=r.transcriptTextEndIndex,m;return{details:{typeName:"video",definition:{itemId:t,courseId:n,snapshotUrl:s||"",transcriptTextStartIndex:r.transcriptTextStartIndex,transcriptTextEndIndex:l,languageCode:a,transcriptText:u,noteEndTs:i&&1e3*i,captureTs:c&&1e3*c,noteStartTs:o&&1e3*o}},userNote:d}}}}]);
//# sourceMappingURL=en.84.bf1bf672d28cf472798c.js.map