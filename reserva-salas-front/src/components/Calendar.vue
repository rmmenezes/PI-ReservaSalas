<template>
<div>
  <h1>sandkas</h1>
      <full-calendar ref="calendar" :event-sources="eventSources" @event-selected="eventSelected" @event-created="eventCreated" :config="config"></full-calendar>
</div>
</template>

<script>
export default {
}
</script>

<style>

</style>
