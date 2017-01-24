package com.pvpin.mod.enhance;

/**
 * Created by magang on 16/3/7.
 */

import de.slikey.effectlib.util.ParticleEffect;
import org.bukkit.Location;

public class ParticleManager {
    public ParticleManager() {
    }

    public static void playParticle(String particleEffect, Location location) {
        try {
            ParticleEffect.fromName(particleEffect).display(location, 32.0D);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}