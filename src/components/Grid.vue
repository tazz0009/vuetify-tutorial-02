<template>
  <div>
    <h3>Grid</h3>
    <v-card class="mt-5 mb-8">
      <v-card-text>
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" sm="6" offset-sm="3" md="4" offset-md="4">
              <v-card class="pa-2" outline tile>
                Column
              </v-card>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="4">
              <v-card class="pa-2" outline tile>
                Column
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card class="pa-2" outline tile>
                Column
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card class="pa-2" outline tile>
                Column
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  border: 1px solid green;
}
.row {
  border: 1px solid red;
}
.col {
  border: 1px solid blue;
}
</style>
