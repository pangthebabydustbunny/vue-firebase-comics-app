<template>
    <div class="page">
        <div class="container">
            <div class="row mb-3">
                <div class="col-12 text-right"><button class="btn btn-outline-secondary  logout" v-on:click="logout">Logout</button></div>
            </div>
            <div class="row">
                <div class="col-8">
                    <article class="covers mb-3" v-for="(comic, idx) in comics" :key="idx">
                    <div class="row">
                        <div class="col-3"><img :src="comic.image" height="291px" width="192px" class="img-fluid"></div>
                        <div class="col-7"><p>{{ comic.name }}</p></div>
                        <div class="col-2">
                            <button class="btn btn-danger" @click="deleteComic(comic.id)">Delete</button>
                        </div> 
                    </div>
                    </article>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <form @submit="addComic(name, image)">
                                <h2>Add a New Comic Cover</h2>
                                <input v-model="name" placeholder="Comic Name" class="form-control mt-2" required>
                                <input v-model="image" placeholder="Comic Image URL" class="form-control mt-2" required>
                                <button type="submit" class="btn btn-primary mt-2">Add New Comic</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../main'

export default {
    name: "Comics",
    data() {
        return {
            comics: [],
            name: '',
            image: ''
        }
    },
    firestore() {
        return {
            comics: db.collection('comics').orderBy('createdAt')
        }
    },
    methods: {
        addComic(name,image) {
            const createdAt = new Date()
            db.collection('comics').add({ name, image, createdAt })
            this.name = '',
            this.image = ''
        },
        deleteComic(id) {
            db.collection('comics').doc(id).delete()
        },
        logout () {
            firebase.auth().signOut().then(() => {
                this.$router.replace('login')
            })
        }
    }
}
</script>