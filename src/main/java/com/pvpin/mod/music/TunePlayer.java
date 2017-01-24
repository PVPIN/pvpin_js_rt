package com.pvpin.mod.music;

/**
 * Created by magang on 16/3/30.
 */

import org.bukkit.Sound;
import org.bukkit.entity.Player;

public class TunePlayer {
    private Player player;
    private Thread thread;
    private boolean songOver;
    private int tick = 0;
    private Tune tune;

    public TunePlayer(Player p, Tune t) {
        this.player = p;
        this.songOver = false;
        this.tune = t;
    }

    public void playTune() {
        this.thread = new Thread(new Runnable() {
            public void run() {
                while (!songOver) {
                    long startTime = System.currentTimeMillis();
                    synchronized (this) {
                        if (tick > tune.getSequence().getSongLength() - 1) {
                            songOver = true;
                        } else {
                            playTick(tick++);
                        }
                    }

                    long duration = System.currentTimeMillis() - startTime;
                    float delayMillis = (float) tune.getThreadDelay();
                    if ((float) duration < delayMillis) {
                        try {
                            Thread.sleep((long) (delayMillis - (float) duration));
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                }

            }
        });
        this.thread.setPriority(10);
        this.thread.start();
    }

    public Tune getTune() {
        return this.tune;
    }

    public void playTick(int tick) {
        if (!(this.tune.getSequence().getNoteSequence().get(tick)).isRest()) {
            NoteSound[] var2 = (this.tune.getSequence().getNoteSequence().get(tick)).getSounds();
            int var3 = var2.length;

            for (int var4 = 0; var4 < var3; ++var4) {
                NoteSound note = var2[var4];
                Sound s = Sound.BLOCK_NOTE_PLING;
                switch (note.getInstrument().ordinal()) {
                    case 1:
                        s = Sound.BLOCK_NOTE_BASEDRUM;
                        break;
                    case 2:
                        s = Sound.BLOCK_NOTE_BASS;
                        break;
                    case 3:
                        s = Sound.BLOCK_NOTE_PLING;
                        break;
                    case 4:
                        s = Sound.BLOCK_NOTE_SNARE;
                        break;
                    case 5:
                        s = Sound.BLOCK_NOTE_HARP;
                        break;
                    case 6:
                        s = Sound.BLOCK_NOTE_HAT;
                }

                this.player.getWorld().playSound(this.player.getEyeLocation(), s, 3.0F, getPitch(note.getNote().getId()));
            }

        }
    }

    private static float getPitch(int id) {
        switch (id) {
            case 0:
                return 0.5F;
            case 1:
                return 0.53F;
            case 2:
                return 0.56F;
            case 3:
                return 0.6F;
            case 4:
                return 0.63F;
            case 5:
                return 0.67F;
            case 6:
                return 0.7F;
            case 7:
                return 0.76F;
            case 8:
                return 0.8F;
            case 9:
                return 0.84F;
            case 10:
                return 0.9F;
            case 11:
                return 0.94F;
            case 12:
                return 1.0F;
            case 13:
                return 1.06F;
            case 14:
                return 1.12F;
            case 15:
                return 1.18F;
            case 16:
                return 1.26F;
            case 17:
                return 1.34F;
            case 18:
                return 1.42F;
            case 19:
                return 1.5F;
            case 20:
                return 1.6F;
            case 21:
                return 1.68F;
            case 22:
                return 1.78F;
            case 23:
                return 1.88F;
            case 24:
                return 2.0F;
            default:
                return 0.0F;
        }
    }
}