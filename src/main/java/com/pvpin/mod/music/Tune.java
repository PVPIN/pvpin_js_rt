package com.pvpin.mod.music;

/**
 * Created by magang on 16/3/30.
 */
public class Tune {
    private Sequence sequence;
    private int tempo;

    public Sequence getSequence() {
        return this.sequence;
    }

    public void setSequence(Sequence sequence) {
        this.sequence = sequence;
    }

    public int getThreadDelay() {
        return 100 * (3600 / this.tempo);
    }

    public Tune(Sequence s, int t) {
        this.sequence = s;
        this.tempo = t;
    }
}