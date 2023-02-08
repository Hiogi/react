import './Login.css'

export function Login () {
 return (
 <div className="principal">
    <div className="mensagem">
      Bem-Vindo ao Lista de compras 
    </div>
    <div className="caixa">
        <div className="logo">
          <img src="/imagens/Logo.png" alt="" />
        </div>
        <div className="campo" id='campoUsuario'>
          <img src="/imagens/usuario-icon.png" alt="" />
          <input placeholder='Usuário' className='input'></input>
        </div>
        <div className="campo" id='campoSenha'>
          <img src="/imagens/senha-icon.png" alt="" />
          <input placeholder='Senha' className='input'></input>
        </div>
        <input type={'submit'} className='enviar' value={'ENVIAR'}></input>
    </div>
 </div>
 
  )
}