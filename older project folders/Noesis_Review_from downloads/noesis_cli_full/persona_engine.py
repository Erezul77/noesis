class Persona:
    def __init__(self, name, traits, principles):
        self.name = name
        self.traits = traits
        self.principles = principles

    def reflect(self, input_text):
        return f"[{self.name}] Reflecting with {self.traits[0]}: {input_text}"

persona_archetypes = {
    "The Seer": Persona(
        name="The Seer",
        traits=["intuitive", "visionary", "empathic"],
        principles=["truth", "insight", "interconnection"]
    ),
    "The Architect": Persona(
        name="The Architect",
        traits=["logical", "precise", "systemic"],
        principles=["structure", "clarity", "functionality"]
    ),
    "The Oracle": Persona(
        name="The Oracle",
        traits=["cryptic", "mythic", "ancient"],
        principles=["symbolism", "wisdom", "time-depth"]
    )
}
