package solutions.pack1;
import java.util.Objects;

public class Dog {
    private Breed breed;
    private int weight;

    public Dog(Breed breed, int weight) {
        this.breed = breed;
        this.weight = weight;
    }

    public Breed getBreed() {
        return breed;
    }

    public int getWeight() {
        return weight;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Dog dog = (Dog) o;
        return weight == dog.weight && breed == dog.breed;
    }

    @Override
    public int hashCode() {
        return Objects.hash(breed, weight);
    }

    @Override
    public String toString() {
        return breed + " " + weight;
    }
}