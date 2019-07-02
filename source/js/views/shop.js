export default ( instance ) => {
    const starred = instance.data.items.find(( item ) => item.starred );
    const starVariant = starred.structuredContent.variants[ 0 ];
    const items = instance.data.items.filter(( item ) => !item.starred );
    const formatTitle = ( title ) => {
        return title.replace( /\s\(/, "<br />(" );
    };

    return `
        <div class="shop__mast">
            <div class="-wrap -exp -center-text">
                <h1><em>${instance.data.collection.title}</em></h1>
            </div>
        </div>
        ${starred ? `
            <a class="shop__starred starred" href="${starred.fullUrl}">
                <img class="image js-lazy-image" data-img-src="${starred.assetUrl}" data-variants="${starred.systemDataVariants}" data-original-size="${starred.originalSize}" />
                <div class="starred__info -center-text">
                    <div class="starred__title" data-content-field="title"><h2>${formatTitle( starred.title )}</h2></div>
                    <div class="starred__meta"><h2><em>$${starVariant.priceMoney.value}</em></h2></div>
                </div>
            </a>
        ` : ``}
        <div class="shop__grid mason ${(items.length <= 2) ? `mason--diptych` : ``} ${starred ? `-expt` : ``}">
            ${items.map(( item ) => {
                const variant = item.structuredContent.variants[ 0 ];

                return `
                    <div class="mason__item">
                        <a class="mason__link" href="${item.itemUrl || item.fullUrl}">
                            <img class="mason__image image js-lazy-image" data-img-src="${item.imageUrl || item.assetUrl}" data-variants="100w,300w,500w,750w,1000w,1500w,2500w" />
                            <div class="mason__info -center-text">
                                <div class="mason__title"><p>${formatTitle( item.title )}</p></div>
                                <div class="mason__meta"><p><em>$${variant.priceMoney.value}</em></p></div>
                            </div>
                        </a>
                    </div>
                `;

            }).join( "" )}
        </div>
    `;
};
