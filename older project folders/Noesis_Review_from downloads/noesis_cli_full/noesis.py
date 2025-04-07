from persona_engine import persona_archetypes
from constitution_sync import sync_constitution

def main():
    print("Welcome to Noēsis CLI.")
    print("Choose your Persona:")
    for key in persona_archetypes:
        print(f"- {key}")

    choice = input("Enter persona name: ").strip()
    persona = persona_archetypes.get(choice)
    if not persona:
        print("Invalid choice. Defaulting to The Seer.")
        persona = persona_archetypes["The Seer"]

    print(f"Persona activated: {persona.name}")
    sync_constitution()

    while True:
        user_input = input(f"[{persona.name}] > ")
        if user_input.lower() in ["exit", "quit"]:
            break
        print(persona.reflect(user_input))

if __name__ == "__main__":
    main()
