import ActivityItem from "./ActivityItem";

export default {
  title: "UI/Activity Item",
  component: ActivityItem
};

//👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { ActivityItem },
  props: Object.keys(argTypes),
  template: "<activity-item v-bind=\"$props\" />"
});

export const Default = Template.bind({});
Default.args = {
  activity: {
    id: "1ede4cd5-06d6-4136-baf2-d62a4f56f577",
    parent_id: null,
    body: "this is a much have feature requests.",
    type: "comment",
    post_id: "8b1a0315-c941-45d5-a9c9-92e9497599bb",
    is_edited: false,
    is_spam: false,
    is_internal: false,
    created_at: "2021-05-09T12:23:37.484Z",
    updated_at: "2021-05-09T12:23:37.484Z",
    author: {
      userId: "8e359afe-510a-423d-805a-18b04974dac1",
      name: "Yashu mittal7",
      username: "mittalyashu7",
      avatar: "https://www.gravatar.com/avatar/83780122029d3c7767c97a6e26642525"
    }
  }
};
