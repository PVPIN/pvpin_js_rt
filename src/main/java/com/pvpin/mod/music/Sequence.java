package com.pvpin.mod.music;

/**
 * Created by magang on 16/3/30.
 */

import java.util.ArrayList;

public class Sequence {
    private ArrayList<Layer> noteSequence = new ArrayList();

    public Sequence(int length) {
    }

    public void addLayer(Layer layer) {
        this.noteSequence.add(layer);
    }

    public void addTune(Tune t) {
        this.noteSequence.addAll(t.getSequence().getNoteSequence());
    }

    public ArrayList<Layer> getNoteSequence() {
        return this.noteSequence;
    }

    public int getSongLength() {
        return this.noteSequence.size();
    }
}
