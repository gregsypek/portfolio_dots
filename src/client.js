import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

//in backend folder run sanity manage
export const client = sanityClient({
	projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
	dataset: "production",
	apiVersion: "2022-12-02",
	useCdn: true,
	token: process.env.REACT_APP_SANITY_TOKEN,
});

//alway use when you want to work with images
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
