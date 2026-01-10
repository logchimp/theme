<template>
  <div class="user-edit">
    <header class="form-header">
      <div class="breadcrumbs">
        <router-link to="/dashboard/users" class="breadcrum-item">
          Users
        </router-link>
        <div class="breadcrum-divider">
          /
        </div>
        <h5 class="breadcrum-item">
          {{ pageTitle }}
        </h5>
      </div>

      <Button
        type="primary"
        :loading="processing"
        :disabled="false"
        @click="updateUser"
      >
        Save
      </Button>
    </header>

    <!-- Here two options can be added: -->
    <!-- a user with permission can directly verfiy a user or request the user to verify their email by sending them a verification email -->
    <!-- shows when user is not verified -->
    <flash v-if="!user.isVerified">
      <strong>{{ user.name || user.username }}</strong> account is not verified.
    </flash>

    <!-- TODO: Add option to block & unblock -->
    <!-- shows when user is blocked -->
    <flash v-if="user.isBlocked" type="danger">
      <strong>{{ user.name || user.username }}</strong> account is not blocked.
    </flash>

    <div class="form-section">
      <div class="form-columns">
        <div class="form-column">
          <div class="card user-profile">
            <div>
              <img
                class="avatar"
                :src="user.avatar"
                :alt="user.name || user.username"
              >
            </div>

            <div class="info">
              <h3>
                {{ user.name }}
              </h3>

              <p>
                {{ user.username }}
              </p>

              <span>
                Created on {{ $date(user.createdAt).format('MMMM DD, YYYY') }}
              </span>
            </div>
          </div>

          <l-text
            v-model="user.username"
            label="Username"
            placeholder="Username"
          />

          <l-text
            v-model="user.name"
            label="Name"
            placeholder="Name"
          />

          <l-text
            v-model="user.email"
            label="Email"
            placeholder="Email"
            :disabled="true"
          />
        </div>

        <div class="form-column">
          <l-textarea
            v-model="user.notes"
            label="Notes (not visible to user)"
            placeholder=""
            rows="6"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// modules
import {
  getUserData
} from "../../../modules/users";

// components
import Button from "../../../components/Button";
import Flash from "../../../components/UI/Flash";
import LText from "../../../components/input/LText";
import LTextarea from "../../../components/input/LTextarea";

export default {
  name: "DashboardUsersEdit",
  components: {
    Button,
    Flash,
    LText,
    LTextarea
  },
  data() {
    return {
      user: {
        userId: "",
        name: "",
        email: "",
        username: "",
        avatar: "",
        isVerified: false,
        isBlocked: false,
        isOwner: false,
        notes: "",
        createdAt: ""
      },
      processing: false
    };
  },
  computed: {
    pageTitle() {
      return this.user.name || this.user.username || this.user.userId;
    }
  },
  created() {
    this.getUserData();
  },
  methods: {
    async getUserData() {
      try {
        const response = await getUserData({
          userId: this.$route.params.id
        });

        console.log("response");
        console.log(response.data.user);

        const user = response.data.user;

        this.user.userId = user.userId;
        this.user.name = user.name;
        this.user.username = user.username;
        this.user.email = user.email;
        this.user.avatar = user.avatar;
        this.user.isBlocked = user.isBlocked;
        this.user.isVerified = user.isVerified;
        this.user.isOwner = user.isOwner;
        this.user.notes = user.notes;
        this.user.createdAt = user.createdAt;

      } catch (error) {
        console.log(error);
      }
    },
    async updateUser() {
      try {
        // const response = await
      } catch (error) {
        console.log(error);
      }
    }
  },
  metaInfo() {
    return {
      title: `${this.pageTitle} · Users · Dashboard`
    };
  }
};
</script>
