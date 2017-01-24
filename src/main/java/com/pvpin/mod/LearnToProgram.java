package com.pvpin.mod;

import com.pvpin.mod.enhance.ParticleManager;
import com.pvpin.mod.music.*;
import org.bukkit.Bukkit;
import org.bukkit.Instrument;
import org.bukkit.Location;
import org.bukkit.Note;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.command.ConsoleCommandSender;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.entity.Player;
import org.bukkit.event.Listener;
import org.bukkit.plugin.java.JavaPlugin;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.io.File;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by magang on 15/12/4.
 */
public class LearnToProgram extends JavaPlugin implements Listener {

    private static JavaPlugin plugin;
    public boolean canary = false;
    public boolean bukkit = true;
    private String NO_JAVASCRIPT_MESSAGE = "No JavaScript Engine";
    protected ScriptEngine engine = null;

    @Override
    public void onEnable() {
        Thread currentThread = Thread.currentThread();
        ClassLoader previousClassLoader = currentThread.getContextClassLoader();
        currentThread.setContextClassLoader(getClassLoader());
        try {
            ScriptEngineManager factory = new ScriptEngineManager();
            this.engine = factory.getEngineByName("JavaScript");
            if (this.engine == null) {
                this.getLogger().severe(NO_JAVASCRIPT_MESSAGE);
            } else {
                Invocable inv = (Invocable) this.engine;
                this.engine.eval(new InputStreamReader(this.getResource("boot.js")));
                inv.invokeFunction("__scboot", this, engine);
            }
        } catch (Exception e) {
            e.printStackTrace();
            this.getLogger().severe(e.getMessage());
        } finally {
            currentThread.setContextClassLoader(previousClassLoader);
        }

        plugin = this;
        System.out.println("PVPIN OK.");
    }


    public void playParticle(String particleName, Location location) {
        ParticleManager.playParticle(particleName, location);
    }

    public NoteSound newNoteSound(Note n, Instrument i) {
        return new NoteSound(i, n);
    }

    public Layer newLayer(int length) {
        return new Layer(length);
    }

    public Sequence newSequence(int length) {
        return new Sequence(length);
    }

    public Tune newTune(Sequence s, int temp) {
        return new Tune(s, temp);
    }

    public TunePlayer newTunePlayer(Tune t, Player p) {
        return new TunePlayer(p, t);
    }
}