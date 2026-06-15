<template>
    <div>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder="Username or Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup></script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
input, button {
  padding: 8px;
}
</style>