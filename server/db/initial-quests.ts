export type Quest = {
    id: string;
    slug: string;
    title: string;
    image: string;
    imageBig: string;
    minPlayers: number;
    maxPlayers: number;
    difficulty:'Easy' | 'Medium' | 'Difficult';
    category: string;
    duration: number;
    description: string;
};

export const initialQuests: Quest[] = [
    {
        id: 'q1',
        title: 'Crypt',
        slug: 'crypt',
        image: 'crypt.png',
        imageBig: 'crypt-big.jpg',
        minPlayers: 2,
        maxPlayers: 5,
        difficulty: 'Difficult',
        category: 'Horrors',
        duration: 60,
        description: 
            'In a dimly lit room, several strangers regain consciousness. No one remembers what happened last night. Their hands and feet are tied, but one of you has managed to break free. A terrifying timer hangs on the wall, counting down from 60 minutes. Will you be able to handle this stressful situation, help the others, figure out what happened, and escape the room?',
    },
    {
        id: 'q2',
        title: 'Maniac',
        slug: 'maniac', 
        image: 'maniac.png',
        imageBig: 'maniac-big.jpg',
        minPlayers: 3,
        maxPlayers: 6,
        difficulty: 'Medium',
        category: 'Horrors',
        duration: 90,
        description:
            'You wake up in a dark and unfamiliar room. The door is locked, the lights keep flickering, and somewhere nearby you can hear footsteps. A dangerous maniac is somewhere in the building, and he knows you are here. You have 60 minutes to find a way out, solve the puzzles, and survive before he finds you.',
    },

    {
        id: 'q3',
        title: 'Ritual',
        slug: 'ritual',
        image: 'ritual.png',
        imageBig: 'ritual-big.jpg',
        minPlayers: 3,
        maxPlayers: 5,
        difficulty: 'Difficult',
        category: 'Mysticism',
        duration: 120,
        description:
            'An ancient ritual has gone terribly wrong. Strange symbols cover the walls, candles burn in the darkness, and something unseen seems to be watching your every move. You have entered a place where the rules of the ordinary world no longer apply. Find the hidden clues, complete the ritual, and escape before it is too late.',
    },

    {
        id: 'q4',
        title: 'Mars-2056',
        slug: 'mars-2056',
        image: 'mars-2056.png',
        imageBig: 'mars-2056-big.jpg',
        minPlayers: 2,
        maxPlayers: 4,
        difficulty: 'Easy',
        category: 'Sci-fi',
        duration: 60,
        description:
            'Year 2056. Humanity has established its first research station on Mars. But something has gone wrong. The station is losing power, communication with Earth has been cut off, and the crew has disappeared. You have limited time to restore the systems, uncover what happened, and find a way to survive on the red planet.',
        },

    {
        id: 'q5',
        title: 'The Secrets of the Old Mansion',
        slug: 'the-secrets-of-the-old-mansion',
        image: 'old-estate-secrets.png',
        imageBig: 'old-estate-secrets-big.jpg',
        minPlayers: 2,
        maxPlayers: 5,
        difficulty: 'Easy',
        category: 'Detective',
        duration: 60,
        description:
            'An abandoned mansion hides a secret that has remained untouched for decades. Strange sounds come from the empty rooms, old photographs seem to hide clues, and every door leads to another mystery. Explore the mansion, connect the pieces of the story, and uncover the secret before the final hour runs out.',
    },

    {
        id: 'q6',
        title: 'The Cabin in the Woods',
        slug: 'the-cabin-in-the-woods',
        image: 'hut-in-the-forest.png',
        imageBig: 'hut-in-the-forest-big.jpg',
        minPlayers: 4,
        maxPlayers: 7,
        difficulty: 'Medium',
        category: 'Horrors',
        duration: 90,
        description:
            'You arrive at an isolated cabin deep in the forest. At first everything seems abandoned, but soon you realize that someone has been here recently. The forest is silent, the doors are locked, and strange signs appear around the cabin. Work together, uncover the truth, and escape before darkness completely surrounds you.',
        },

    {
        id: 'q7',
        title: 'Fatal Experiment',
        slug: 'fatal-experiment',
        image: 'fatal-experiment.png',
        imageBig: 'fatal-experiment-big',
        minPlayers: 5,
        maxPlayers: 8,
        difficulty: 'Difficult',
        category: 'Sci-fi',
        duration: 120,
        description:
            'A secret scientific experiment has gone out of control. You find yourselves inside a damaged laboratory surrounded by strange equipment and warning signals. The experiment is still running, and every minute makes the situation more dangerous. Work as a team, restore the laboratory systems, discover what happened, and stop the experiment before it reaches its final stage.',
    },

    {
        id: 'q8',
        slug: 'metro-2033',
        title: 'Metro 2033',
        image: 'metro-2033.png',
        imageBig: 'metro-2033-big',
        minPlayers: 6,
        maxPlayers: 8,
        difficulty: 'Medium',
        category: 'Sci-fi',
        duration: 90,
        description:
            'The world outside is no longer safe. You are survivors hiding deep beneath the ruined city in an abandoned metro station. Supplies are running out, the lights are failing, and something is moving in the tunnels. Your team must explore the station, find a way forward, and reach a safe zone before the last source of power disappears.',
        },

    {
        id: 'q9',
        slug: 'the-old-attic',
        title: 'The Old Attic',
        image: 'old-attic.png',
        imageBig: 'old-attic-big.jpg',
        minPlayers: 2,
        maxPlayers: 3,
        difficulty: 'Easy',
        category: 'Mysticism',
        duration: 60,
        description:
            'You discover an old attic filled with forgotten objects, mysterious photographs, and locked boxes. Every item seems to be connected to a story from the past. Somewhere among the dust and shadows is the key to the final mystery. Search carefully, solve the puzzles, and discover what has been hidden in the attic for so many years.',
    },
]