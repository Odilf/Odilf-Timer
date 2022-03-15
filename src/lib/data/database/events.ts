import {  ref, onValue, set, remove } from "firebase/database"
import { type Event, defaultEvents } from '../architecture'
import { writable } from 'svelte/store'
import { db, uid } from './main'

export const events = writable(defaultEvents as Event[])

const eventsPrefix = 'Events'

export async function getUserEvents(): Promise<void> {
	if (!db) {
		console.log('Database not yet initialized');
		return
	}
	if (!uid) {
		console.log('Tried to retrieve user events without a loggen in user');
		return
	}

	console.log('Getting events of user', uid);
	
	const eventRef = ref(db, `${uid}/${eventsPrefix}`)
	onValue(eventRef, snapshot => {
		const dbEvents = snapshot.val() as Event[]

		console.log('getting events');
		

		if (!dbEvents) {
			console.log('No events!');
			set(eventRef, defaultEvents)
		}

		events.set(Object.values(dbEvents))
	})
}


export async function deleteEvent(event: Event, events: Event[]) {
	getUserEvents()
	console.log('Deleting', event, 'from', events);
	
	const index = events.map(event => event.name).indexOf(event.name)
	if (index === -1) return

	const eventRef = ref(db, `${uid}/${eventsPrefix}/${index}`)
	await remove(eventRef)
}

export async function addEvent(event: Event, events: Event[]) {
	getUserEvents()
	const index = events.map(event => event.name).indexOf(event.name)

	if (index === -1) {
		console.log('Event not found, and I dont know what to do');
	}

	const eventRef = ref(db, `${uid}/${eventsPrefix}/${index}`)
	await set(eventRef, event)
}