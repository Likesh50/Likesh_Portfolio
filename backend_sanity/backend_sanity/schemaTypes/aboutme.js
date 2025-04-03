export default {
    name: "aboutme",
    title: "About Me",
    type: "document",
    fields: [
      {
        name: "profileImg",
        title: "Profile Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "resume",
        title: "Resume File",
        type: "file",
      },
    ],
  };
  