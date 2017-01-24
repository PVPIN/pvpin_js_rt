package com.pvpin.mod.music;

/**
 * Created by magang on 16/3/30.
 */
public class Layer {
    private NoteSound[] sounds;
    private int tracker;

    public NoteSound[] getSounds() {
        return this.sounds;
    }

    public void setSounds(NoteSound[] sounds) {
        this.sounds = sounds;
    }

    public void addNoteSound(NoteSound ns) {
        this.sounds[this.tracker++] = ns;
    }

    public boolean isRest() {
        return this.tracker == 0;
    }

    public Layer(NoteSound[] s) {
        this.sounds = s;
        this.tracker = 0;
    }

    public Layer(int length) {
        this.sounds = new NoteSound[length];
        this.tracker = 0;
    }
}
