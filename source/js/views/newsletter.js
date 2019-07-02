// import $ from "properjs-hobo";
// import * as core from "../core";



export default ( instance ) => {
    const getField = ( field ) => {
        let ret = ``;

        if ( field.name ) {
            ret = `<input type="${field.type}" class="inp js-form-input" ${field.required ? `required` : ``} placeholder="Name" name="${field.id}" value="Automoton" />`;
        }

        if ( field.email ) {
            ret = `
                <input type="email" class="inp js-form-input" ${field.required ? `required` : ``} placeholder="Email address" name="${field.id}" />
                <button type="submit" class="btn js-form-submit">${instance.blockJson.form.submitButtonText}</button>
            `;
        }

        return ret;
    };

    return `
        <div class="form__entry">
            <div class="form__fieldset form__fieldset--title">
                <h1 class="teal">${instance.blockJson.title}</h1>
                <div class="m">${instance.blockJson.description.html}</div>
            </div>
            ${instance.blockJson.form.parsedFields.map(( field ) => {
                return `<div class="form__fieldset form__fieldset--inline">${getField( field )}</div>`;

            }).join( "" )}
        </div>
        <div class="form__message js-form-message"></div>
    `;
};
