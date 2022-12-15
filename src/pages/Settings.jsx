import React from "react";
import "../styles/settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Cadastro</h2>

        <div className="settings__top">
          <button className="setting__btn">Meus Detalhes</button>
          <button className="setting__btn active__btn">Perfil</button>
          <button className="setting__btn">Senha</button>
          <button className="setting__btn">Email</button>
          <button className="setting__btn">Notificações</button>
        </div>

        <div className="details__form">
          <h2 className="profile__title">Perfil</h2>
          <p className="profile__desc">
            Preencha os campos com as informações
          </p>
          <form>
            <div className="form__group">
              <div>
                <label>Endereço</label>
                <input type="text" placeholder="Rio de Janeiro, Brasil" />
              </div>

              <div>
                <label>Rua</label>
                <input type="text" placeholder="Clarimundo de Melo" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Email</label>
                <input type="email" placeholder="exemplo@gmail.com" />
              </div>

              <div>
                <label>Phone Number</label>
                <input type="number" placeholder="21 9********" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Data de Nascimento</label>
                <input type="date" placeholder="dd/mm/yyyy" />
              </div>

              <div>
                <label>Sexo</label>
                <input type="text" placeholder="Male" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Sua foto</label>
                <p className="profile-img__desc">
                  A foto aparecerá no seu perfil
                </p>
                <input type="file" placeholder="choose file" />
              </div>

              <div className="profile__img-btns">
                <button className="update__btn">Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
