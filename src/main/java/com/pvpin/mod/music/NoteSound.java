package com.pvpin.mod.music;

/**
 * Created by magang on 16/3/30.
 */

import org.bukkit.Instrument;
import org.bukkit.Note;

public class NoteSound {
    private Instrument instrument;
    private Note note;

    public NoteSound(Instrument i, Note n) {
        this.instrument = i;
        this.note = n;
    }

    public Note getNote() {
        return this.note;
    }

    public void setNote(Note note) {
        this.note = note;
    }

    public Instrument getInstrument() {
        return this.instrument;
    }

    public void setInstrument(Instrument instrument) {
        this.instrument = instrument;
    }
}
