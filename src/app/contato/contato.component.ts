import { Component, Renderer2, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificacaoService } from '../notificacao.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent {

  formContato = this.formBuilder.group({
    nome: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    assunto: ["", [
      Validators.minLength(5),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(16),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(10),
      Validators.required
    ]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private elemento: ElementRef,
    private notificacaoService: NotificacaoService

  ) { }

  ngAfterViewInit() {
    const formGroup = this.formContato;
    const formElement = this.elemento.nativeElement.querySelector('form');
    const wrapper = this.elemento.nativeElement.querySelector('.wrapper1');
    const botao = this.elemento.nativeElement.querySelector('.botao-submit1');
    this.renderer.listen(formElement, 'input', () => {
      if (formGroup.valid && wrapper.classList.contains('wrapper1') && botao.classList.contains('botao-submit1')) {
        wrapper.classList.replace('wrapper1', 'wrapper2');
        botao.classList.replace('botao-submit1', 'botao-submit2');
      } else if (botao && wrapper && formGroup.invalid && botao.classList.contains('botao-submit2') && wrapper.classList.contains('wrapper2')) {
        wrapper.classList.replace('wrapper2', 'wrapper1');
        botao.classList.replace('botao-submit2', 'botao-submit1');
      }
    });
  }

  enviarFormulario() {
    this.notificacaoService.notificar("Sua mensagem foi enviada com sucesso!");
    this.formContato.reset();
    this.resetBotao();
  }

  resetBotao() {
    const wrapper = this.elemento.nativeElement.querySelector(".wrapper2");
    const botao = this.elemento.nativeElement.querySelector(".botao-submit2");
    console.log(wrapper);
    console.log(botao);
    botao.classList.replace("botao-submit2", "botao-submit1");
    wrapper.classList.replace("wrapper2", "wrapper1");
  }

  moveButton() {
    const wrapper = this.elemento.nativeElement.querySelector(".wrapper1");
    const botao = this.elemento.nativeElement.querySelector(".botao-submit1");
    if (wrapper && botao && !this.formContato.valid) {
      if (wrapper.classList.contains("divBotao-move-left")) {
        wrapper.classList.remove("divBotao-move-left");
      } else {
        wrapper.classList.add("divBotao-move-left");
      }
    } else if (botao && this.formContato.valid) {
      botao.classList.replace("botao-submit1", "botao-submit2");
      wrapper.classList.replace("wrapper1", "wrapper2");
    }
  }
}

/*moveButton() {
  const botao = document.getElementsByClassName('botao-inicial')[0];
  if (botao && !this.formContato.valid) {
    if (botao.classList.contains("botao-inicial")) {
      if (botao.classList.contains("botao-move-left")) {
        botao.classList.replace('botao-move-left', 'botao-move-left-down')
      } else if (botao.classList.contains('botao-move-left-down')) {
        botao.classList.replace('botao-move-left-down', 'botao-move-right-down')
      } else if (botao.classList.contains('botao-move-right-down')) {
        botao.classList.remove('botao-move-right-down')
      } else {
        botao.classList.add('botao-move-left')
      }
    }
  }
}*/
