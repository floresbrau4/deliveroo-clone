export default {

    name: "featured",
    title: "Featured Menu categories",
    type: "document",
    fields: [

        {
            name: "name",
            type: "string",
            title: "Featured Category name",


        },

        {
            name: "short_description",
            type: "string",
            title: "Short description",



        },

        {
            name: "restaurants",
            type: "array",
            title: "Restaurantssss",
            of: [{type: "reference", to: [{ type: "post"}] }],



        },


    ],
};