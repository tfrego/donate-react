(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,a){},158:function(e,t,a){},160:function(e,t,a){},162:function(e,t,a){},164:function(e,t,a){},166:function(e,t,a){},170:function(e,t,a){},172:function(e,t,a){},174:function(e,t,a){},176:function(e,t,a){},178:function(e,t,a){},180:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(76),s=a.n(o),r=(a(82),a(5)),c=a(6),i=a(8),m=a(7),u=a(9),p=a(186),d=a(185),f=a(188),h=a(189),g=a(187),b=a(34),E=a.n(b);E.a.initializeApp({apiKey:"AIzaSyDg-k6_xNaZY-8ah4wjbxadEM-3fYSFWmw",authDomain:"trang-donate-app.firebaseapp.com",databaseURL:"https://trang-donate-app.firebaseio.com",projectId:"trang-donate-app",storageBucket:"trang-donate-app.appspot.com",messagingSenderId:"233559537420"});var v=new E.a.auth.FacebookAuthProvider,C=E.a.auth(),y=E.a,N=a(4),S=a.n(N),k=a(13),O=a(40),F=a.n(O),j=(a(154),function(e){var t=e.title,a=e.description,n=e.qty,o=e.userName,s=e.userId,r=e.location,c=e.userLocation,i=null;return r&&c&&(console.log(c),console.log(r),i=(F.a.getDistance({latitude:c.latitude,longitude:c.longitude},{latitude:r.lat,longitude:r.lng})/1609.34).toFixed(2)),l.a.createElement("div",{className:"request"},i<20?l.a.createElement("div",null,l.a.createElement("h4",null,t.charAt(0).toUpperCase()+t.slice(1)),l.a.createElement("p",null,"Description: ",a),l.a.createElement("p",null,"Quantity: ",n),l.a.createElement("p",null,"Posted By:"),l.a.createElement(d.a,{to:"/".concat(s)},l.a.createElement("button",{className:"btn btn-info"},o)),l.a.createElement("p",null,r.cityState),i?l.a.createElement("p",null,"(",i," miles)"):null):null)}),L=(a(158),function(e){var t=e.items.map(function(t){return l.a.createElement(j,Object.assign({key:t.id,userLocation:e.userLocation},t))});return l.a.createElement("div",{className:"request"},t)}),I=(a(160),function(e){var t=e.userId,a=e.title,n=e.description,o=e.image,s=e.qty,r=e.location,c=e.userLocation,i=null;return r&&c&&(console.log(c),console.log(r),i=(F.a.getDistance({latitude:c.latitude,longitude:c.longitude},{latitude:r.lat,longitude:r.lng})/1609.34).toFixed(2)),l.a.createElement("div",{className:"offer card mb-3"},i<20?l.a.createElement("div",null,l.a.createElement("h4",{className:"card-header"},a.charAt(0).toUpperCase()+a.slice(1)),l.a.createElement("div",{className:"hovereffect"},o?l.a.createElement("img",{src:o,alt:a}):null,l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"rotate"},l.a.createElement("p",{className:"group1"},l.a.createElement(d.a,{to:"/email/".concat(t)},l.a.createElement("i",{className:"far fa-envelope-open"})))))),l.a.createElement("p",{className:"card-text"},"Description: ",n),l.a.createElement("p",{className:"card-text"},"Quantity: ",s),l.a.createElement("p",null,r.cityState," "),i?l.a.createElement("p",null,"(",i," miles)"):null,l.a.createElement(d.a,{to:"/email/".concat(t)},l.a.createElement("button",{className:"btn btn-info"},"Connect"))):null)}),w=(a(162),function(e){var t=e.items.map(function(t){return l.a.createElement(I,Object.assign({key:t.id,userLocation:e.userLocation},t))});return l.a.createElement("div",{className:"offerlist"},t)}),q=(a(164),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onSearchChange=function(e){a.setState({searchValue:e.target.value}),a.props.onSearchCallback(e.target.value)},a.state={searchValue:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",null,l.a.createElement("input",{onChange:this.onSearchChange,value:this.state.searchValue,name:"search-bar",className:"form-control mr-sm-2 search-bar",placeholder:"Search Items"}))}}]),t}(n.Component)),M=(a(166),"http://104.198.104.134:8080/"),x=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).searchRequestList=function(e){console.log(e);var t=new RegExp("".concat(e).toUpperCase()),n=a.state.requestMasterList.filter(function(e){return t.test("".concat(e.title).concat(e.description).toUpperCase())});a.setState({requestList:n})},a.searchOfferList=function(e){console.log(e);var t=new RegExp("".concat(e).toUpperCase()),n=a.state.offerMasterList.filter(function(e){return t.test("".concat(e.title).concat(e.description).toUpperCase())});a.setState({offerList:n})},a.state={requestList:[],requestMasterList:[],offerList:[],offerMasterList:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.a.get(M+"requests/active").then(function(t){console.log(t);var a=t.data.map(function(e){return Object(k.a)({},e)});e.setState({requestList:a,requestMasterList:a})}).catch(function(t){console.log(t.message),e.setState({errorMessage:t.message})}),S.a.get(M+"offers/active").then(function(t){console.log(t);var a=t.data.map(function(e){return Object(k.a)({},e)});e.setState({offerList:a,offerMasterList:a})}).catch(function(t){console.log(t.message),e.setState({errorMessage:t.message})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("section",{className:"home"},l.a.createElement("div",null,l.a.createElement("p",{className:"home-text"},"Connect directly with those in need to donate your new and gently used items. Gift a wish!"),l.a.createElement(d.a,{to:"/post"},l.a.createElement("button",{type:"button",className:"btn btn-primary"},l.a.createElement("i",{className:"fas fa-gift"})))),l.a.createElement("div",null,l.a.createElement("p",{className:"home-text"},"Are you a family in need? Post your wish list and get connected with someone in your community."),l.a.createElement(d.a,{to:"/post"},l.a.createElement("button",{type:"button",className:"btn btn-primary"},l.a.createElement("i",{className:"fas fa-list-alt"}))))),l.a.createElement("section",{className:"lists"},l.a.createElement("h2",null,"Wish Lists"),l.a.createElement("p",null,"Search wish lists created by families and donation centers in your local communities."),l.a.createElement(q,{onSearchCallback:this.searchRequestList}),l.a.createElement(L,{items:this.state.requestList,userLocation:this.props.userLocation})),l.a.createElement("section",{className:"lists"},l.a.createElement("h2",null,"Donate List"),l.a.createElement("p",null,"View new and gently used items available to be donated."),l.a.createElement(q,{onSearchCallback:this.searchOfferList}),l.a.createElement(w,{items:this.state.offerList,userLocation:this.props.userLocation})))}}]),t}(n.Component),A=function(){return l.a.createElement("div",{className:"main"},l.a.createElement("h2",null,"About"))},R="http://104.198.104.134:8080/",D=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).login=function(){C.signInWithPopup(v).then(function(e){var t=e.user;a.setState({user:t,uid:t.uid,name:t.displayName,email:t.email,photo:t.photoURL}),localStorage.setItem("user",JSON.stringify(t)),console.log(t)})},a.onFormChange=function(e){var t=e.target.name,n=e.target.value,l={};l[t]=n,a.setState(l),console.log(a.state)},a.zipCodeFinder=function(e){e.preventDefault();var t=a.state.zipCode;S.a.get("https://maps.googleapis.com/maps/api/geocode/json?address="+t+"&key=AIzaSyBEkQNrsKDetMLRJ1dG4-n968ioQ6Mugl4").then(function(e){console.log(e);var t=e.data.results[0].geometry.location,n=t.lat,l=t.lng,o=e.data.results[0].formatted_address,s=o.indexOf(","),r=o.slice(0,s+4);console.log(n,l,r),a.setState({location:{lat:n,lng:l,cityState:r}})}).catch(function(e){console.log(e.message),a.setState({errorMessage:e.message})})},a.onSubmit=function(e){e.preventDefault(),console.log(a.state);var t=a.state;S.a.post(R+"users/",t).then(function(e){console.log("API RESPONSE SUCCESS",e)}).catch(function(e){a.setState({errorMessage:e.message})})},a.state={user:null,uid:null,name:"",email:"",about:"",photo:"",zipCode:"",location:null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("form",{onSubmit:this.onSubmit,className:"form-inline"},l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.login},"Authenticate With ",l.a.createElement("i",{class:"fab fa-facebook-square"})),this.state.photo?l.a.createElement("img",{className:"user-profile",src:this.state.photo,alt:"user"}):null),l.a.createElement("div",null,l.a.createElement("label",{className:"new-item-form--label",htmlFor:"name"},"Name"),l.a.createElement("input",{className:"form-control mr-sm-2",type:"text",name:"name",placeholder:"name",onChange:this.onFormChange,value:this.state.name})),l.a.createElement("div",null,l.a.createElement("label",{className:"new-item-form--label",htmlFor:"email"},"Email"),l.a.createElement("input",{className:"form-control mr-sm-2",type:"text",name:"email",placeholder:"email",onChange:this.onFormChange,value:this.state.email})),l.a.createElement("div",null,l.a.createElement("label",{className:"new-item-form--label",htmlFor:"about"},"About"),l.a.createElement("textarea",{className:"form-control",name:"about",placeholder:"tell us about yourself",onChange:this.onFormChange,value:this.state.about})),l.a.createElement("div",null,l.a.createElement("label",{className:"new-item-form--label",htmlFor:"location"},"Location"),l.a.createElement("input",{className:"form-control",type:"text",name:"zipCode",placeholder:"Zip Code",onChange:this.onFormChange,value:this.state.zipCode}),l.a.createElement("button",{className:"btn btn-info",type:"submit",onClick:this.zipCodeFinder},"Go")),l.a.createElement("div",null,l.a.createElement("input",{type:"submit",name:"submit",value:"Submit"}),l.a.createElement("button",{type:"button",onClick:function(){return e.props.cancelFormCallback()}},"Cancel")))}}]),t}(n.Component),z=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).onFormChange=function(e){var t=e.target.name,a=e.target.value,l={};l[t]=a,n.setState(l),console.log(n.state)},n.fileChangedHandler=function(e){console.log(e.target.files[0]),n.setState({selectedFile:e.target.files[0]}),console.log(n.state)},n.zipCodeFinder=function(e){e.preventDefault();var t=n.state.zipCode;S.a.get("https://maps.googleapis.com/maps/api/geocode/json?address="+t+"&key=AIzaSyBEkQNrsKDetMLRJ1dG4-n968ioQ6Mugl4").then(function(e){console.log(e);var t=e.data.results[0].geometry.location,a=t.lat,l=t.lng,o=e.data.results[0].formatted_address,s=o.indexOf(","),r=o.slice(0,s+4);console.log(a,l,r),n.setState({location:{lat:a,lng:l,cityState:r}})}).catch(function(e){console.log(e.message),n.setState({errorMessage:e.message})})},n.onSubmit=function(e){e.preventDefault(),console.log(n.state),console.log("Selected file",n.state.selectedFile);var t=n.state.selectedFile;if(t){var l=y.storage().ref(),o=a(75)();console.log(o),l.child("images/".concat(o,"/").concat(n.state.selectedFile.name)).put(t).then(function(e){console.log("File uploaded!"),e.ref.getDownloadURL().then(function(e){console.log("File available at",e),n.setState({photo:e.toString()}),console.log(n.state),n.props.postProfileCallback(n.state)})})}else console.log(n.state),n.props.postProfileCallback(n.state)},n.state={uid:n.props.uid||"",name:n.props.name||"",email:n.props.email||"",about:n.props.about||"",photo:n.props.photo||"",selectedFile:null,zipCode:"",location:n.props.location||null},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("form",{onSubmit:this.onSubmit,className:"form"},l.a.createElement("div",null,l.a.createElement("label",{className:"new-item-form--label",htmlFor:"name"},"Name"),l.a.createElement("input",{className:"form-control mr-sm-2",type:"text",name:"name",placeholder:"name",onChange:this.onFormChange,value:this.state.name})),l.a.createElement("div",null,l.a.createElement("label",{className:"new-item-form--label",htmlFor:"email"},"Email"),l.a.createElement("input",{className:"form-control mr-sm-2",type:"text",name:"email",placeholder:"email",onChange:this.onFormChange,value:this.state.email})),l.a.createElement("div",null,l.a.createElement("label",{className:"new-item-form--label",htmlFor:"about"},"About"),l.a.createElement("textarea",{className:"form-control",name:"about",placeholder:"tell us about yourself",onChange:this.onFormChange,value:this.state.about})),l.a.createElement("div",null,l.a.createElement("label",{className:"new-item-form--label",htmlFor:"photo"},"Photo"),l.a.createElement("input",{type:"file",onChange:this.fileChangedHandler})),l.a.createElement("div",null,l.a.createElement("label",{className:"form-inline",htmlFor:"zipCode"},"Location"),l.a.createElement("input",{className:"form-control",type:"text",name:"zipCode",placeholder:"Zip Code",onChange:this.onFormChange,value:this.state.zipCode}),l.a.createElement("button",{type:"submit",onClick:this.zipCodeFinder},"Save Location")),l.a.createElement("div",null,l.a.createElement("input",{type:"submit",name:"submit",value:"Submit",className:"btn btn-outline-info"}),l.a.createElement("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){return e.props.cancelFormCallback()}},"Cancel")))}}]),t}(n.Component),P=(a(170),"http://104.198.104.134:8080/"),U=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onEditClick=function(){a.setState({editProfile:!0})},a.onCancelClick=function(){a.setState({editProfile:!1})},a.editProfile=function(e){console.log(e);var t=Object(k.a)({},e);S.a.put(P+"users/"+a.state.id,t).then(function(e){console.log(e),a.setState({editProfile:!1})}).catch(function(e){a.setState({errorMessage:"Failure ".concat(e.message)})})},a.state={user:JSON.parse(localStorage.getItem("user")),editProfile:!1,id:"",uid:"",name:"",email:"",about:"",photo:"",location:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.onAuthStateChanged(function(t){console.log("User",t),t&&e.setState({user:t})}),console.log("CHECKING USER"),console.log(this.state),S.a.get(P+"users/".concat(this.state.user.uid)).then(function(t){console.log(t);var a=t.data;console.log(a),e.setState({user:a,editProfile:!1,id:a.id,uid:a.uid,name:a.name,email:a.email,about:a.about,photo:a.photo,location:a.location}),console.log(e.state)}).catch(function(t){console.log(t.message),e.setState({errorMessage:t.message})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"main"},this.state.photo?l.a.createElement("img",{className:"profile-photo",src:this.state.photo,alt:"user"}):null,l.a.createElement("h3",null,this.state.name),l.a.createElement("p",null,"Email: ",this.state.email),l.a.createElement("p",null,"About: ",this.state.about),l.a.createElement("p",null,"Location: ",this.state.location.cityState," "),l.a.createElement("button",{onClick:this.onEditClick,className:"btn btn-primary"},"Edit Profile"),this.state.editProfile?l.a.createElement(z,Object.assign({postProfileCallback:this.editProfile,cancelFormCallback:this.onCancelClick},this.state)):null)}}]),t}(n.Component),_=(a(172),function(e){var t=e.title,a=e.description,n=e.image,o=e.qty,s=e.userName,r=e.userId;return l.a.createElement("tr",{className:"matches"},l.a.createElement("td",null,t.charAt(0).toUpperCase()+t.slice(1)),l.a.createElement("td",null,a),l.a.createElement("td",null,o),l.a.createElement("td",null,n?l.a.createElement("img",{src:n,alt:t,className:"dashboard-img"}):null),l.a.createElement("td",null,s),l.a.createElement("td",null,l.a.createElement(d.a,{to:"/email/".concat(r)},l.a.createElement("i",{className:"far fa-envelope-open contact"}))))}),G=["Appliances","Arts & Crafts","Auto Parts","Baby & Kids","Beauty & Health","Books & Magazines","Clothing & Shoes","Electronics","Furniture","Games & Toys","Home & Garden","Jewelry & Accessories","Musical Instruments","Pet Supplies","Sports & Outdoors"],B=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).onFormChange=function(e){var t=e.target.name,a=e.target.value,l={};l[t]=a,n.setState(l),console.log(n.state)},n.fileChangedHandler=function(e){console.log(e.target.files[0]),n.setState({selectedFile:e.target.files[0]}),console.log(n.state)},n.zipCodeFinder=function(e){e.preventDefault();var t=n.state.zipCode;S.a.get("https://maps.googleapis.com/maps/api/geocode/json?address="+t+"&key=AIzaSyBEkQNrsKDetMLRJ1dG4-n968ioQ6Mugl4").then(function(e){console.log(e);var t=e.data.results[0].geometry.location,a=t.lat,l=t.lng,o=e.data.results[0].formatted_address,s=o.indexOf(","),r=o.slice(0,s+4);console.log(a,l,r),n.setState({location:{lat:a,lng:l,cityState:r}})}).catch(function(e){console.log(e.message),n.setState({errorMessage:e.message})})},n.onSubmit=function(e){e.preventDefault(),console.log(n.state),console.log("Selected file",n.state.selectedFile);var t=n.state.selectedFile,l=n.state,o=l.title,s=l.category,r=l.description,c=l.location;if(""!==o&&""!==s&&""!==r&&""!==c)if(t){var i=y.storage().ref(),m=a(75)();console.log(m),i.child("images/".concat(m,"/").concat(n.state.selectedFile.name)).put(t).then(function(e){console.log("File uploaded!"),e.ref.getDownloadURL().then(function(e){console.log("File available at",e),n.setState({image:e.toString()}),console.log(n.state),n.props.postItemCallback(n.state)})})}else console.log(n.state),n.props.postItemCallback(n.state)},n.state={type:n.props.type,title:n.props.title||"",category:n.props.category||"",description:n.props.description||"",image:n.props.image||"",qty:n.props.qty||"",selectedFile:null,zipCode:"",location:n.props.location||null},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("form",{onSubmit:this.onSubmit,className:"form",name:"new-item-form",id:"new-item-form"},l.a.createElement("div",null,l.a.createElement("label",{className:"new-item-form--label",htmlFor:"title"},"Title"),l.a.createElement("input",{className:"form-control mr-sm-2",type:"text",name:"title",placeholder:"title",onChange:this.onFormChange,value:this.state.title})),l.a.createElement("div",null,l.a.createElement("label",{className:"new-item-form--label",htmlFor:"category"},"Category"),l.a.createElement("select",{className:"form-control",name:"category",placeholder:"select",onChange:this.onFormChange,value:this.state.category},l.a.createElement("option",{value:"",defaultValue:!0,disabled:!0},"Please select"),G.map(function(e,t){return l.a.createElement("option",{key:t,value:e},e)}))),l.a.createElement("div",null,l.a.createElement("label",{className:"new-item-form--label",htmlFor:"description"},"Description"),l.a.createElement("textarea",{className:"form-control",name:"description",placeholder:"description",onChange:this.onFormChange,value:this.state.description})),l.a.createElement("div",null,l.a.createElement("label",{className:"new-item-form--label",htmlFor:"qty"},"Quantity"),l.a.createElement("input",{className:"form-control mr-sm-2",type:"text",name:"qty",placeholder:"qty",onChange:this.onFormChange,value:this.state.qty})),"offers"===this.state.type?l.a.createElement("div",null,l.a.createElement("input",{type:"file",onChange:this.fileChangedHandler})):null,l.a.createElement("div",null,l.a.createElement("label",{className:"new-item-form--label",htmlFor:"location"},"Location"),l.a.createElement("input",{className:"form-control",type:"text",name:"zipCode",placeholder:"Zip Code",onChange:this.onFormChange,value:this.state.zipCode}),l.a.createElement("button",{type:"submit",onClick:this.zipCodeFinder},"Save Location")),l.a.createElement("div",null,l.a.createElement("input",{type:"submit",name:"submit",value:"Submit",className:"btn btn-outline-info"}),l.a.createElement("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){return e.props.cancelFormCallback()}},"Cancel")))}}]),t}(n.Component),Q="http://104.198.104.134:8080/",J=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onEditClick=function(){a.setState({editItem:!0})},a.onCancelClick=function(){a.setState({editItem:!1})},a.editItem=function(e){console.log(e);var t=Object(k.a)({},e,{userId:a.state.user.uid,userName:a.state.user.displayName,status:"active"});S.a.put(Q+e.type+"/"+a.props.id,t).then(function(t){console.log(t),a.setState({editItem:!1}),a.props.itemUpdatedCallback(e,a.props.id)}).catch(function(e){a.setState({errorMessage:"Failure ".concat(e.message)})})},a.itemFulfilled=function(e,t){var n=Object(k.a)({},a.props,{userId:a.state.user.uid,userName:a.state.user.displayName,status:"inactive"});S.a.put(Q+a.props.type+"/"+a.props.id,n).then(function(n){console.log(n),a.props.itemFullfilledCallback(e,t)}).catch(function(e){a.setState({errorMessage:"Failure ".concat(e.message)})})},a.state={editItem:!1,user:JSON.parse(localStorage.getItem("user"))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.title,o=t.category,s=t.description,r=t.image,c=t.qty,i=t.matches,m=t.type,u=null;return i!==[]&&void 0!==i&&(u=i.map(function(e){return l.a.createElement(_,Object.assign({key:e.id},e))})),l.a.createElement("div",{className:"dashboard-item"},l.a.createElement("h4",null,n.charAt(0).toUpperCase()+n.slice(1)),l.a.createElement("p",null,"Category: ",o),l.a.createElement("p",null,"Description: ",s),l.a.createElement("p",null,"Quantity: ",c),r?l.a.createElement("img",{src:r,alt:n,className:"dashboard-img"}):null,l.a.createElement("button",{className:"btn btn-outline-info",onClick:this.onEditClick},"Edit"),l.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){return e.props.deleteItemCallback(a,m)}},"Delete"),"requests"===m?l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.itemFulfilled(a,m)}},"Received"):l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.itemFulfilled(a,m)}},"Donated"),this.state.editItem?l.a.createElement(B,Object.assign({postItemCallback:this.editItem,cancelFormCallback:this.onCancelClick},this.props)):null,u?l.a.createElement("div",{className:"matches"},l.a.createElement("h4",null,"Matches:"),l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Title"),l.a.createElement("th",{scope:"col"},"Description"),l.a.createElement("th",{scope:"col"},"Quantity"),l.a.createElement("th",{scope:"col"},"Image"),l.a.createElement("th",{scope:"col"},"User"),l.a.createElement("th",{scope:"col"},"Contact"))),l.a.createElement("tbody",null,u))):null)}}]),t}(n.Component),W=function(e){var t=e.items.map(function(t){return l.a.createElement(J,Object.assign({key:t.id,deleteItemCallback:e.deleteItemCallback,itemFullfilledCallback:e.itemFullfilledCallback,itemUpdatedCallback:e.itemUpdatedCallback,type:e.type},t))});return l.a.createElement("div",null,t)},H=(a(174),"http://104.198.104.134:8080/"),K=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).newWish=function(){return a.setState({newRequest:!0})},a.newGift=function(){return a.setState({newOffer:!0})},a.onCancelRequest=function(){return a.setState({newRequest:!1})},a.onCancelOffer=function(){return a.setState({newOffer:!1})},a.addRequest=function(e){console.log(e);var t=Object(k.a)({},e,{userId:a.state.user.uid,userName:a.state.user.displayName,status:"active"});S.a.post(H+"requests/",t).then(function(t){console.log("API RESPONSE SUCCESS",t);var n=a.state.requestList;n.push(e),a.setState({requestList:n,newRequest:!1})}).catch(function(e){a.setState({errorMessage:e.message})})},a.addOffer=function(e){console.log(e);var t=Object(k.a)({},e,{userId:a.state.user.uid,userName:a.state.user.displayName,status:"active"});S.a.post(H+"offers/",t).then(function(t){console.log("API RESPONSE SUCCESS",t);var n=a.state.offerList;n.push(e),a.setState({offerList:n,newOffer:!1})}).catch(function(e){a.setState({errorMessage:e.message})})},a.deleteItem=function(e,t){S.a.delete(H+t+"/"+e).then(function(n){if(console.log(n),"requests"===t){var l=a.state.requestList,o=l.find(function(t){return t.id===e});l.splice(l.indexOf(o),1),a.setState({requestList:l})}else if("offers"===t){var s=a.state.offerList,r=s.find(function(t){return t.id===e});s.splice(s.indexOf(r),1),a.setState({offerList:s})}}).catch(function(e){a.setState({errorMessage:"Failure ".concat(e.message)})})},a.updateItem=function(e,t){if(console.log("Item",e),console.log("Id",t),"requests"===e.type){var n=a.state.requestList,l=n.find(function(e){return e.id===t}),o=n.indexOf(l);n[o]=e,a.setState({requestList:n})}else if("offers"===e.type){console.log(e);var s=a.state.offerList;console.log(s);var r=s.find(function(e){return e.id===t});console.log(r);var c=s.indexOf(r);console.log(c),s[c]=e,console.log(s),a.setState({offerList:s}),console.log(a.state)}},a.itemFulfilled=function(e,t){if("requests"===t){var n=a.state.requestList,l=n.find(function(t){return t.id===e});n.splice(n.indexOf(l),1),a.setState({requestList:n})}else if("offers"===t){var o=a.state.offerList,s=o.find(function(t){return t.id===e});o.splice(o.indexOf(s),1),a.setState({offerList:o})}},a.state={user:JSON.parse(localStorage.getItem("user")),requestList:[],offerList:[],newRequest:!1,newOffer:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.onAuthStateChanged(function(t){console.log("User",t),t&&e.setState({user:t})}),console.log("CHECKING USER"),console.log(this.state),S.a.get(H+"offers/user/".concat(this.state.user.uid)).then(function(t){console.log(t.data);var a=t.data.map(function(e){return Object(k.a)({},e)});e.setState({offerList:a})}).catch(function(t){console.log(t.message),e.setState({errorMessage:t.message})}),S.a.get(H+"requests/user/".concat(this.state.user.uid)).then(function(t){console.log(t.data);var a=t.data.map(function(e){return Object(k.a)({},e)});e.setState({requestList:a})}).catch(function(t){console.log(t.message),e.setState({errorMessage:t.message})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("section",{className:"dashboard"},l.a.createElement("h3",null,"My Wish List"),l.a.createElement("button",{onClick:this.newWish,className:"btn btn-primary"},"Add a Wish"),this.state.newRequest?l.a.createElement(B,{postItemCallback:this.addRequest,cancelFormCallback:this.onCancelRequest,type:"requests"}):null,l.a.createElement(W,{items:this.state.requestList,deleteItemCallback:this.deleteItem,itemFullfilledCallback:this.itemFulfilled,itemUpdatedCallback:this.updateItem,type:"requests"})),l.a.createElement("section",{className:"dashboard"},l.a.createElement("h3",null,"My Items to Donate"),l.a.createElement("button",{onClick:this.newGift,className:"btn btn-primary"},"Add Item to Donate"),this.state.newOffer?l.a.createElement(B,{postItemCallback:this.addOffer,cancelFormCallback:this.onCancelOffer,type:"offers"}):null,l.a.createElement(W,{items:this.state.offerList,deleteItemCallback:this.deleteItem,itemFullfilledCallback:this.itemFulfilled,itemUpdatedCallback:this.updateItem,type:"offers"})))}}]),t}(n.Component),V=function(e){var t=e.title,a=e.description,n=e.qty;return l.a.createElement("tr",{className:"matches"},l.a.createElement("td",null,t.charAt(0).toUpperCase()+t.slice(1)),l.a.createElement("td",null,a),l.a.createElement("td",null,n))},T=function(e){var t=e.items.map(function(e){return l.a.createElement(V,Object.assign({key:e.id},e))});return l.a.createElement("div",{className:"matches"},l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Title"),l.a.createElement("th",{scope:"col"},"Description"),l.a.createElement("th",{scope:"col"},"Quantity"))),l.a.createElement("tbody",null,t)))},Z=(a(176),"http://104.198.104.134:8080/"),Y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={user:"",userRequests:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params),S.a.get(Z+"users/"+this.props.match.params.user).then(function(t){console.log(t);var a=t.data;console.log(a),e.setState({user:a})}).catch(function(t){console.log(t.message),e.setState({errorMessage:t.message})}),S.a.get(Z+"requests/user/"+this.props.match.params.user).then(function(t){console.log(t);var a=t.data.map(function(e){return Object(k.a)({},e)});e.setState({userRequests:a}),console.log(e.state)}).catch(function(t){console.log(t.message),e.setState({errorMessage:t.message})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"main user"},l.a.createElement("h3",null,"Meet ",this.state.user.name," ",l.a.createElement(d.a,{to:"/email/".concat(this.state.user.uid)},l.a.createElement("i",{className:"far fa-envelope-open contact"}))),this.state.user.photo?l.a.createElement("img",{className:"profile-photo",src:this.state.user.photo,alt:"user"}):null,l.a.createElement("p",null,"About: ",this.state.user.about),l.a.createElement("h3",null,"Wishlist"),l.a.createElement(T,{items:this.state.userRequests}))}}]),t}(n.Component),$=(a(178),"http://104.198.104.134:8080/"),X="user_ANisyVtgRIFgbNzAuhqkB",ee=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onFormChange=function(e){var t=e.target.name,n=e.target.value,l={};l[t]=n,a.setState(l),console.log(a.state)},a.onSubmit=function(e){e.preventDefault();var t={service_id:"default_service",template_id:"contact_form",user_id:"user_ANisyVtgRIFgbNzAuhqkB",template_params:a.state};console.log("PayLoad",t),console.log($),console.log(X),S.a.post("https://api.emailjs.com/api/v1.0/email/send",t).then(function(e){console.log("API RESPONSE SUCCESS",e)}).catch(function(e){a.setState({errorMessage:e.message})}),a.setState({to_email:"",subject:"",from_email:"",message:""})},a.state={to_email:"",subject:"",from_email:"",message:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params),S.a.get($+"users/"+this.props.match.params.emailUser).then(function(t){console.log(t);var a=t.data;console.log(a),e.setState({to_email:a.email})}).catch(function(t){console.log(t.message),e.setState({errorMessage:t.message})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"email"},l.a.createElement("form",{onSubmit:this.onSubmit,className:"form",id:"contact-form"},l.a.createElement("input",{type:"hidden",name:"to_email",value:this.state.to_email}),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"subject"},"Subject"),l.a.createElement("input",{className:"form-control",type:"text",name:"subject",onChange:this.onFormChange,value:this.state.subject})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"from_email"},"From Email"),l.a.createElement("input",{className:"form-control",type:"text",name:"from_email",onChange:this.onFormChange,value:this.state.from_email})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"message"},"Message"),l.a.createElement("textarea",{className:"form-control",rows:"4",name:"message",onChange:this.onFormChange,value:this.state.message})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"}," Send ")))}}]),t}(n.Component),te=function(){return l.a.createElement("div",{className:"main"},l.a.createElement("h3",null,"Please Log In"))},ae=(a(180),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).logout=function(){C.signOut().then(function(){e.setState({user:null}),localStorage.setItem("user",null)})},e.login=function(){C.signInWithPopup(v).then(function(t){var a=t.user;e.setState({user:a}),localStorage.setItem("user",JSON.stringify(a)),console.log(a)})},e.getLocation=function(){if(navigator.geolocation){console.log("Geolocation is supported!");navigator.geolocation.getCurrentPosition(function(t){console.log("Location",t),e.setState({location:t.coords}),console.log(e.state),localStorage.setItem("location",JSON.stringify(t.coords))})}else console.log("Geolocation is not supported for this Browser/OS.")},e.zipCodeFinder=function(t){t.preventDefault();var a=e.state.zipCode;S.a.get("https://maps.googleapis.com/maps/api/geocode/json?address="+a+"&key=AIzaSyBEkQNrsKDetMLRJ1dG4-n968ioQ6Mugl4").then(function(t){console.log(t);var a=t.data.results[0].geometry.location,n=a.lat,l=a.lng;e.setState({location:{latitude:n,longitude:l}})}).catch(function(t){console.log(t.message),e.setState({errorMessage:t.message})})},e.onFormChange=function(t){var a=t.target.name,n=t.target.value,l={};l[a]=n,e.setState(l),console.log(e.state)},e.state={user:null,location:null,zipCode:"",userProfile:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.onAuthStateChanged(function(t){t&&e.setState({user:t}),console.log("CURRENT USER",e.state.user)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("form",{className:"form-inline form-location"},l.a.createElement("button",{className:"btn btn-info",type:"button",onClick:this.getLocation},l.a.createElement("i",{className:"fa fa-map-marker"})," Find My Location"),l.a.createElement("span",null,"  or  "),l.a.createElement("input",{className:"form-control",type:"text",name:"zipCode",placeholder:"Zip or City, State",onChange:this.onFormChange,value:this.state.zipCode}),l.a.createElement("button",{className:"btn btn-info",type:"submit",onClick:this.zipCodeFinder},"Go")),l.a.createElement(p.a,null,l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-fixed-top"},this.state.user?l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.a,{to:"/",className:"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.a,{to:"/about",className:"nav-link"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.a,{to:"/profile",className:"nav-link"},"My Profile")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.a,{to:"/dashboard",className:"nav-link"},"My Items")),l.a.createElement("li",null,l.a.createElement("img",{className:"user-profile",src:this.state.user.photoURL,alt:"user"})),l.a.createElement("li",null,l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.logout},"LOG OUT"))):l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.a,{to:"/",className:"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.a,{to:"/about",className:"nav-link"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.a,{to:"/signup",className:"nav-link"},"Sign Up")),l.a.createElement("li",null,l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.login},"LOG IN")))),l.a.createElement(f.a,null,l.a.createElement(h.a,{path:"/",exact:!0,render:function(){return l.a.createElement(x,{userLocation:e.state.location})}}),l.a.createElement(h.a,{path:"/about",component:A}),l.a.createElement(h.a,{path:"/signup",component:D}),l.a.createElement(h.a,{exact:!0,path:"/post",render:function(){return e.state.user?l.a.createElement(g.a,{to:"/dashboard"}):l.a.createElement(te,null)}}),l.a.createElement(h.a,{path:"/profile",render:function(){return l.a.createElement(U,{user:e.state.user})}}),l.a.createElement(h.a,{path:"/dashboard",render:function(){return l.a.createElement(K,{user:e.state.user})}}),l.a.createElement(h.a,{path:"/:user",exact:!0,component:Y}),l.a.createElement(h.a,{path:"/email/:emailUser",component:ee})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},77:function(e,t,a){e.exports=a(184)},82:function(e,t,a){}},[[77,2,1]]]);
//# sourceMappingURL=main.c24292d5.chunk.js.map