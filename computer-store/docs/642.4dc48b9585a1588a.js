"use strict";(self.webpackChunkcomputer_store=self.webpackChunkcomputer_store||[]).push([[642],{2642:(E,i,m)=>{m.r(i),m.d(i,{ContatoModule:()=>I});var l=m(6895),s=m(9541),r=m(433),o=m(1571);function c(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa de no m\xednimo 4 caracteres. "),o.qZA())}function f(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function p(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,c,2,0,"small",11),o.YNc(2,f,2,0,"small",11),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.formContato.controls.nome.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.nome.hasError("required"))}}function d(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa de no m\xednimo 10 caracteres. "),o.qZA())}function u(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function C(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,d,2,0,"small",11),o.YNc(2,u,2,0,"small",11),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.formContato.controls.assunto.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.assunto.hasError("required"))}}function g(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function _(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,g,2,0,"small",11),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.formContato.controls.telefone.hasError("required"))}}function h(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function v(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,h,2,0,"small",11),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.formContato.controls.email.hasError("required"))}}function Z(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa de no m\xednimo 20 caracteres. "),o.qZA())}function x(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function T(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,Z,2,0,"small",11),o.YNc(2,x,2,0,"small",11),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.formContato.controls.mensagem.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.mensagem.hasError("required"))}}const y=[{path:"",component:(()=>{class t{constructor(n){this.fb=n,this.formContato=this.fb.group({nome:["",[r.kI.minLength(4),r.kI.required]],assunto:["",[r.kI.minLength(11),r.kI.required]],telefone:["",[r.kI.minLength(4),r.kI.required]],email:["",[r.kI.email,r.kI.required]],mensagem:["",[r.kI.minLength(20),r.kI.required]]})}enviarFormulario(){alert("O formul\xe1rio foi enviado!"),this.formContato.reset()}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(r.qu))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-contato"]],decls:20,vars:11,consts:[[1,"contact__title"],[1,"contact__container"],[1,"contact-form",3,"formGroup","ngSubmit"],["type","text","placeholder","Digite o seu nome:","formControlName","nome"],[4,"ngIf"],["type","assunto","placeholder","Digite o assunto:","formControlName","assunto"],["type","tel","placeholder","(00) 0 0000-0000","formControlName","telefone"],["type","email","placeholder","Digite o seu e-mail","formControlName","email"],["maxlength","300","placeholder","Digite uma mensagem ...","rows","4","formControlName","mensagem"],["type","submit",3,"disabled"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0945202756375!2d31.129525015113565!3d29.976713481906984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584f7de239bbcd%3A0xca7474355a6e368b!2zUGlyw6JtaWRlcyBkZSBHaXrDqQ!5e0!3m2!1spt-BR!2sbr!4v1680736367654!5m2!1spt-BR!2sbr","width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(n,e){1&n&&(o.TgZ(0,"h2",0),o._uU(1," Entre em contato\n"),o.qZA(),o.TgZ(2,"section",1)(3,"form",2),o.NdJ("ngSubmit",function(){return e.enviarFormulario()}),o._UZ(4,"input",3),o.YNc(5,p,3,2,"div",4),o._UZ(6,"input",5),o.YNc(7,C,3,2,"div",4),o._UZ(8,"input",6),o.YNc(9,_,2,1,"div",4),o._UZ(10,"input",7),o.YNc(11,v,2,1,"div",4),o._UZ(12,"textarea",8),o.YNc(13,T,3,2,"div",4),o.TgZ(14,"button",9),o._uU(15,"Enviar"),o.qZA()(),o.TgZ(16,"address"),o._UZ(17,"iframe",10),o.TgZ(18,"p"),o._uU(19,"Pir\xe2mides de Giz\xe9, Egito."),o.qZA()()()),2&n&&(o.xp6(3),o.Q6J("formGroup",e.formContato),o.xp6(1),o.ekj("valid",e.formContato.controls.nome.valid)("invalid",e.formContato.controls.nome.invalid&&(e.formContato.controls.nome.touched||e.formContato.controls.nome.dirty)),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.nome.invalid&&(e.formContato.controls.nome.touched||e.formContato.controls.nome.dirty)),o.xp6(2),o.Q6J("ngIf",e.formContato.controls.assunto.invalid&&(e.formContato.controls.assunto.touched||e.formContato.controls.assunto.dirty)),o.xp6(2),o.Q6J("ngIf",e.formContato.controls.telefone.invalid&&(e.formContato.controls.telefone.touched||e.formContato.controls.telefone.dirty)),o.xp6(2),o.Q6J("ngIf",e.formContato.controls.email.invalid&&(e.formContato.controls.email.touched||e.formContato.controls.email.dirty)),o.xp6(2),o.Q6J("ngIf",e.formContato.controls.mensagem.invalid&&(e.formContato.controls.mensagem.touched||e.formContato.controls.mensagem.dirty)),o.xp6(1),o.Q6J("disabled",e.formContato.invalid))},dependencies:[l.O5,r._Y,r.Fj,r.JJ,r.JL,r.nD,r.sg,r.u],styles:[".contact__title[_ngcontent-%COMP%]{font-size:44px;color:gray;font-weight:700;padding:8px 0}.contact-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;row-gap:20px;margin-bottom:50px;min-width:300px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:#00f;border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}.contact__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:gray}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}"]}),t})()}];let b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.Bz.forChild(y),s.Bz]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[l.ez,b,r.UX]}),t})()}}]);