export default [
  {
    name: "name",
    title: "Name",
    type: "string",
  },
  {
    name: "img",
    title: "Image Path",
    type: "string",
  },
  {
    name: "image",
    title: "Image File",
    type: "image",
  },
  {
    name: "description",
    title: "Description",
    type: "array",
    of: [{ type: "block" }],
  },
];
