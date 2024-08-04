// crcon.js
class API {
    constructor(baseURL, config = {}) {
        this.baseURL = baseURL;
        this.token = config.token || null;
    }

    async request(endpoint, method, args = {}) {
        let url = `${this.baseURL}/${endpoint}`;
        const options = {
            method,
            headers: {
                Authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json",
            },
        };

        if (args && method === "GET") {
            // Convert arguments to query parameters
            const queryParams = new URLSearchParams(args).toString();
            url += queryParams ? `?${queryParams}` : "";
        }

        if (args && method === "POST")
        {
            options.body = JSON.stringify(args);
        }

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return data;
        } catch (error) {
            console.error(`Error: ${error.message}`);
            throw error;
        }
    }

    async async_upload_vips() {
        return this.request("async_upload_vips", "POST", {});
    }

    async async_upload_vips_result() {
        return this.request("async_upload_vips_result", "POST", {});
    }

    async blacklist_player() {
        return this.request("blacklist_player", "POST", {});
    }

    async clear_cache() {
        return this.request("clear_cache", "POST", {});
    }

    async date_scoreboard() {
        return this.request("date_scoreboard", "POST", {});
    }

    async describe_admin_pings_discord_webhooks_config() {
        return this.request(
            "describe_admin_pings_discord_webhooks_config",
            "GET",
            {}
        );
    }

    async describe_audit_discord_webhooks_config() {
        return this.request(
            "describe_audit_discord_webhooks_config",
            "GET",
            {}
        );
    }

    async describe_auto_broadcasts_config() {
        return this.request("describe_auto_broadcasts_config", "GET", {});
    }

    async describe_auto_mod_level_config() {
        return this.request("describe_auto_mod_level_config", "GET", {});
    }

    async describe_auto_mod_no_leader_config() {
        return this.request("describe_auto_mod_no_leader_config", "GET", {});
    }

    async describe_auto_mod_seeding_config() {
        return this.request("describe_auto_mod_seeding_config", "GET", {});
    }

    async describe_auto_mod_solo_tank_config() {
        return this.request("describe_auto_mod_solo_tank_config", "GET", {});
    }

    async describe_camera_discord_webhooks_config() {
        return this.request(
            "describe_camera_discord_webhooks_config",
            "GET",
            {}
        );
    }

    async describe_camera_notification_config() {
        return this.request("describe_camera_notification_config", "GET", {});
    }

    async describe_chat_commands_config() {
        return this.request("describe_chat_commands_config", "GET", {});
    }

    async describe_chat_discord_webhooks_config() {
        return this.request("describe_chat_discord_webhooks_config", "GET", {});
    }

    async describe_expired_vip_config() {
        return this.request("describe_expired_vip_config", "GET", {});
    }

    async describe_kills_discord_webhooks_config() {
        return this.request(
            "describe_kills_discord_webhooks_config",
            "GET",
            {}
        );
    }

    async describe_log_line_webhook_config() {
        return this.request("describe_log_line_webhook_config", "GET", {});
    }

    async describe_log_stream_config() {
        return this.request("describe_log_stream_config", "GET", {});
    }

    async describe_name_kick_config() {
        return this.request("describe_name_kick_config", "GET", {});
    }

    async describe_rcon_connection_settings_config() {
        return this.request(
            "describe_rcon_connection_settings_config",
            "GET",
            {}
        );
    }

    async describe_rcon_server_settings_config() {
        return this.request("describe_rcon_server_settings_config", "GET", {});
    }

    async describe_real_vip_config() {
        return this.request("describe_real_vip_config", "GET", {});
    }

    async describe_scorebot_config() {
        return this.request("describe_scorebot_config", "GET", {});
    }

    async describe_server_name_change_config() {
        return this.request("describe_server_name_change_config", "GET", {});
    }

    async describe_standard_broadcast_messages() {
        return this.request("describe_standard_broadcast_messages", "GET", {});
    }

    async describe_standard_punishments_messages() {
        return this.request(
            "describe_standard_punishments_messages",
            "GET",
            {}
        );
    }

    async describe_standard_welcome_messages() {
        return this.request("describe_standard_welcome_messages", "GET", {});
    }

    async describe_steam_config() {
        return this.request("describe_steam_config", "GET", {});
    }

    async describe_tk_ban_on_connect_config() {
        return this.request("describe_tk_ban_on_connect_config", "GET", {});
    }

    async describe_vac_game_bans_config() {
        return this.request("describe_vac_game_bans_config", "GET", {});
    }

    async describe_votekick_autotoggle_config() {
        return this.request("describe_votekick_autotoggle_config", "GET", {});
    }

    async describe_votemap_config() {
        return this.request("describe_votemap_config", "GET", {});
    }

    async describe_watchlist_discord_webhooks_config() {
        return this.request(
            "describe_watchlist_discord_webhooks_config",
            "GET",
            {}
        );
    }

    async do_add_admin(steam_id_64, role, name) {
        return this.request("do_add_admin", "POST", {
            steam_id_64: steam_id_64,
            role: role,
            name: name,
        });
    }

    async do_add_map_to_rotation(
        map_name,
        after_map_name,
        after_map_name_number
    ) {
        return this.request("do_add_map_to_rotation", "POST", {
            map_name: map_name,
            after_map_name: after_map_name,
            after_map_name_number: after_map_name_number,
        });
    }

    async do_add_map_to_whitelist() {
        return this.request("do_add_map_to_whitelist", "POST", {});
    }

    async do_add_maps_to_rotation(maps) {
        return this.request("do_add_maps_to_rotation", "POST", { maps: maps });
    }

    async do_add_maps_to_whitelist() {
        return this.request("do_add_maps_to_whitelist", "POST", {});
    }

    async do_add_vip(name, steam_id_64, expiration) {
        return this.request("do_add_vip", "POST", {
            name: name,
            steam_id_64: steam_id_64,
            expiration: expiration,
        });
    }

    async do_ban_profanities(profanities) {
        return this.request("do_ban_profanities", "POST", {
            profanities: profanities,
        });
    }

    async do_kick(player, reason, by, steam_id_64) {
        return this.request("do_kick", "POST", {
            player: player,
            reason: reason,
            by: by,
            steam_id_64: steam_id_64,
        });
    }

    async do_message_player(player, steam_id_64, message, by, save_message) {
        return this.request("do_message_player", "POST", {
            player: player,
            steam_id_64: steam_id_64,
            message: message,
            by: by,
            save_message: save_message,
        });
    }

    async do_perma_ban(player, steam_id_64, reason, by) {
        return this.request("do_perma_ban", "POST", {
            player: player,
            steam_id_64: steam_id_64,
            reason: reason,
            by: by,
        });
    }

    async do_punish(player, reason, by) {
        return this.request("do_punish", "POST", {
            player: player,
            reason: reason,
            by: by,
        });
    }

    async do_reconnect_gameserver() {
        return this.request("do_reconnect_gameserver", "POST", {});
    }

    async do_remove_admin(steam_id_64) {
        return this.request("do_remove_admin", "POST", {
            steam_id_64: steam_id_64,
        });
    }

    async do_remove_all_vips() {
        return this.request("do_remove_all_vips", "POST", {});
    }

    async do_remove_map_from_rotation(map_name, map_number) {
        return this.request("do_remove_map_from_rotation", "POST", {
            map_name: map_name,
            map_number: map_number,
        });
    }

    async do_remove_map_from_whitelist() {
        return this.request("do_remove_map_from_whitelist", "POST", {});
    }

    async do_remove_maps_from_rotation(maps) {
        return this.request("do_remove_maps_from_rotation", "POST", {
            maps: maps,
        });
    }

    async do_remove_maps_from_whitelist() {
        return this.request("do_remove_maps_from_whitelist", "POST", {});
    }

    async do_remove_perma_ban(ban_log) {
        return this.request("do_remove_perma_ban", "POST", {
            ban_log: ban_log,
        });
    }

    async do_remove_temp_ban(ban_log, steam_id_64) {
        return this.request("do_remove_temp_ban", "POST", {
            ban_log: ban_log,
            steam_id_64: steam_id_64,
        });
    }

    async do_remove_vip(steam_id_64) {
        return this.request("do_remove_vip", "POST", {
            steam_id_64: steam_id_64,
        });
    }

    async do_reset_map_whitelist() {
        return this.request("do_reset_map_whitelist", "POST", {});
    }

    async do_reset_votekick_threshold() {
        return this.request("do_reset_votekick_threshold", "POST", {});
    }

    async do_save_setting(name, value) {
        return this.request("do_save_setting", "POST", {
            name: name,
            value: value,
        });
    }

    async do_service() {
        return this.request("do_service", "POST", {});
    }

    async do_set_map_whitelist() {
        return this.request("do_set_map_whitelist", "POST", {});
    }

    async do_switch_player_now(player, by) {
        return this.request("do_switch_player_now", "POST", {
            player: player,
            by: by,
        });
    }

    async do_switch_player_on_death(player, by) {
        return this.request("do_switch_player_on_death", "POST", {
            player: player,
            by: by,
        });
    }

    async do_temp_ban(player, steam_id_64, duration_hours, reason, by) {
        return this.request("do_temp_ban", "POST", {
            player: player,
            steam_id_64: steam_id_64,
            duration_hours: duration_hours,
            reason: reason,
            by: by,
        });
    }

    async do_unban(steam_id_64) {
        return this.request("do_unban", "POST", { steam_id_64: steam_id_64 });
    }

    async do_unban_profanities(profanities) {
        return this.request("do_unban_profanities", "POST", {
            profanities: profanities,
        });
    }

    async do_unwatch_player() {
        return this.request("do_unwatch_player", "POST", {});
    }

    async do_watch_player() {
        return this.request("do_watch_player", "POST", {});
    }

    async download_vips() {
        return this.request("download_vips", "POST", {});
    }

    async flag_player() {
        return this.request("flag_player", "POST", {});
    }

    async get_admin_groups() {
        return this.request("get_admin_groups", "GET", {});
    }

    async get_admin_ids(self) {
        return this.request("get_admin_ids", "GET", { self: self });
    }

    async get_admin_pings_discord_webhooks_config() {
        return this.request(
            "get_admin_pings_discord_webhooks_config",
            "GET",
            {}
        );
    }

    async get_all_discord_webhooks_config() {
        return this.request("get_all_discord_webhooks_config", "GET", {});
    }

    async get_all_standard_message_config() {
        return this.request("get_all_standard_message_config", "GET", {});
    }

    async get_audit_discord_webhooks_config() {
        return this.request("get_audit_discord_webhooks_config", "GET", {});
    }

    async get_audit_logs() {
        return this.request("get_audit_logs", "GET", {});
    }

    async get_audit_logs_autocomplete() {
        return this.request("get_audit_logs_autocomplete", "GET", {});
    }

    async get_auto_broadcasts_config() {
        return this.request("get_auto_broadcasts_config", "GET", {});
    }

    async get_auto_mod_level_config() {
        return this.request("get_auto_mod_level_config", "GET", {});
    }

    async get_auto_mod_no_leader_config() {
        return this.request("get_auto_mod_no_leader_config", "GET", {});
    }

    async get_auto_mod_seeding_config() {
        return this.request("get_auto_mod_seeding_config", "GET", {});
    }

    async get_auto_mod_solo_tank_config() {
        return this.request("get_auto_mod_solo_tank_config", "GET", {});
    }

    async get_auto_settings() {
        return this.request("get_auto_settings", "GET", {});
    }

    async get_autobalance_enabled(self) {
        return this.request("get_autobalance_enabled", "GET", { self: self });
    }

    async get_autobalance_threshold(self) {
        return this.request("get_autobalance_threshold", "GET", { self: self });
    }

    async get_ban(steam_id_64) {
        return this.request("get_ban", "GET", { steam_id_64: steam_id_64 });
    }

    async get_bans() {
        return this.request("get_bans", "GET", {});
    }

    async get_broadcast_message() {
        return this.request("get_broadcast_message", "GET", {});
    }

    async get_camera_discord_webhooks_config() {
        return this.request("get_camera_discord_webhooks_config", "GET", {});
    }

    async get_camera_notification_config() {
        return this.request("get_camera_notification_config", "GET", {});
    }

    async get_chat_commands_config() {
        return this.request("get_chat_commands_config", "GET", {});
    }

    async get_chat_discord_webhooks_config() {
        return this.request("get_chat_discord_webhooks_config", "GET", {});
    }

    async get_connection_info() {
        return this.request("get_connection_info", "GET", {});
    }

    async get_current_map_sequence(self) {
        return this.request("get_current_map_sequence", "GET", { self: self });
    }

    async get_detailed_player_info(self, player) {
        return this.request("get_detailed_player_info", "GET", {
            self: self,
            player: player,
        });
    }

    async get_detailed_players() {
        return this.request("get_detailed_players", "GET", {});
    }

    async get_expired_vip_config() {
        return this.request("get_expired_vip_config", "GET", {});
    }

    async get_gamestate() {
        return this.request("get_gamestate", "GET", {});
    }

    async get_historical_logs() {
        return this.request("get_historical_logs", "GET", {});
    }

    async get_idle_autokick_time(self) {
        return this.request("get_idle_autokick_time", "GET", { self: self });
    }

    async get_ingame_mods() {
        return this.request("get_ingame_mods", "GET", {});
    }

    async get_kills_discord_webhooks_config() {
        return this.request("get_kills_discord_webhooks_config", "GET", {});
    }

    async get_live_game_stats() {
        return this.request("get_live_game_stats", "GET", {});
    }

    async get_log_line_webhook_config() {
        return this.request("get_log_line_webhook_config", "GET", {});
    }

    async get_log_stream_config() {
        return this.request("get_log_stream_config", "GET", {});
    }

    async get_logs(args, kwargs) {
        return this.request("get_logs", "GET", { args: args, kwargs: kwargs });
    }

    async get_map(self) {
        return this.request("get_map", "GET", { self: self });
    }

    async get_map_history() {
        return this.request("get_map_history", "GET", {});
    }

    async get_map_rotation(self) {
        return this.request("get_map_rotation", "GET", { self: self });
    }

    async get_map_scoreboard() {
        return this.request("get_map_scoreboard", "GET", {});
    }

    async get_map_shuffle_enabled(self) {
        return this.request("get_map_shuffle_enabled", "GET", { self: self });
    }

    async get_map_whitelist() {
        return this.request("get_map_whitelist", "GET", {});
    }

    async get_maps(self) {
        return this.request("get_maps", "GET", { self: self });
    }

    async get_max_ping_autokick(self) {
        return this.request("get_max_ping_autokick", "GET", { self: self });
    }

    async get_name(self) {
        return this.request("get_name", "GET", { self: self });
    }

    async get_name_kick_config() {
        return this.request("get_name_kick_config", "GET", {});
    }

    async get_next_map(self) {
        return this.request("get_next_map", "GET", { self: self });
    }

    async get_online_console_admins() {
        return this.request("get_online_console_admins", "GET", {});
    }

    async get_online_mods() {
        return this.request("get_online_mods", "GET", {});
    }

    async get_own_user_permissions() {
        return this.request("get_own_user_permissions", "GET", {});
    }

    async get_perma_bans(self) {
        return this.request("get_perma_bans", "GET", { self: self });
    }

    async get_player_comment() {
        return this.request("get_player_comment", "GET", {});
    }

    async get_player_info(self, player, can_fail) {
        return this.request("get_player_info", "GET", {
            self: self,
            player: player,
            can_fail: can_fail,
        });
    }

    async get_player_messages() {
        return this.request("get_player_messages", "GET", {});
    }

    async get_playerids(as_dict) {
        return this.request("get_playerids", "GET", { as_dict: as_dict });
    }

    async get_players(self) {
        return this.request("get_players", "GET", { self: self });
    }

    async get_players_fast() {
        return this.request("get_players_fast", "GET", {});
    }

    async get_previous_map() {
        return this.request("get_previous_map", "GET", {});
    }

    async get_profanities(self) {
        return this.request("get_profanities", "GET", { self: self });
    }

    async get_queue_length(self) {
        return this.request("get_queue_length", "GET", { self: self });
    }

    async get_rcon_connection_settings_config() {
        return this.request("get_rcon_connection_settings_config", "GET", {});
    }

    async get_rcon_server_settings_config() {
        return this.request("get_rcon_server_settings_config", "GET", {});
    }

    async get_real_vip_config() {
        return this.request("get_real_vip_config", "GET", {});
    }

    async get_recent_logs() {
        return this.request("get_recent_logs", "GET", {});
    }

    async get_round_time_remaining(self) {
        return this.request("get_round_time_remaining", "GET", { self: self });
    }

    async get_scoreboard_maps() {
        return this.request("get_scoreboard_maps", "GET", {});
    }

    async get_scorebot_config() {
        return this.request("get_scorebot_config", "GET", {});
    }

    async get_server_name_change_config() {
        return this.request("get_server_name_change_config", "GET", {});
    }

    async get_server_settings() {
        return this.request("get_server_settings", "GET", {});
    }

    async get_server_stats() {
        return this.request("get_server_stats", "GET", {});
    }

    async get_services() {
        return this.request("get_services", "GET", {});
    }

    async get_slots(self) {
        return this.request("get_slots", "GET", { self: self });
    }

    async get_standard_broadcast_messages() {
        return this.request("get_standard_broadcast_messages", "GET", {});
    }

    async get_standard_punishments_messages() {
        return this.request("get_standard_punishments_messages", "GET", {});
    }

    async get_standard_welcome_messages() {
        return this.request("get_standard_welcome_messages", "GET", {});
    }

    async get_status(self) {
        return this.request("get_status", "GET", { self: self });
    }

    async get_steam_config() {
        return this.request("get_steam_config", "GET", {});
    }

    async get_structured_logs(
        self,
        since_min_ago,
        filter_action,
        filter_player
    ) {
        return this.request("get_structured_logs", "GET", {
            self: self,
            since_min_ago: since_min_ago,
            filter_action: filter_action,
            filter_player: filter_player,
        });
    }

    async get_team_objective_scores(self) {
        return this.request("get_team_objective_scores", "GET", { self: self });
    }

    async get_team_switch_cooldown(self) {
        return this.request("get_team_switch_cooldown", "GET", { self: self });
    }

    async get_team_view(self) {
        return this.request("get_team_view", "GET", { self: self });
    }

    async get_temp_bans(self) {
        return this.request("get_temp_bans", "GET", { self: self });
    }

    async get_tk_ban_on_connect_config() {
        return this.request("get_tk_ban_on_connect_config", "GET", {});
    }

    async get_vac_game_bans_config() {
        return this.request("get_vac_game_bans_config", "GET", {});
    }

    async get_version() {
        return this.request("get_version", "GET", {});
    }

    async get_vip_ids(self) {
        return this.request("get_vip_ids", "GET", { self: self });
    }

    async get_vip_slots_num(self) {
        return this.request("get_vip_slots_num", "GET", { self: self });
    }

    async get_vips_count() {
        return this.request("get_vips_count", "GET", {});
    }

    async get_votekick_autotoggle_config() {
        return this.request("get_votekick_autotoggle_config", "GET", {});
    }

    async get_votekick_enabled(self) {
        return this.request("get_votekick_enabled", "GET", { self: self });
    }

    async get_votekick_threshold(self) {
        return this.request("get_votekick_threshold", "GET", { self: self });
    }

    async get_votemap_config() {
        return this.request("get_votemap_config", "GET", {});
    }

    async get_votemap_status() {
        return this.request("get_votemap_status", "GET", {});
    }

    async get_watchlist_discord_webhooks_config() {
        return this.request("get_watchlist_discord_webhooks_config", "GET", {});
    }

    async get_welcome_message() {
        return this.request("get_welcome_message", "GET", {});
    }

    async is_logged_in() {
        return this.request("is_logged_in", "POST", {});
    }

    async live_scoreboard() {
        return this.request("live_scoreboard", "POST", {});
    }

    async login() {
        return this.request("login", "POST", {});
    }

    async logout() {
        return this.request("logout", "POST", {});
    }

    async player(steam_id_64) {
        return this.request("player", "GET", { steam_id_64: steam_id_64 });
    }

    async players_history() {
        return this.request("players_history", "GET", {});
    }

    async post_player_comment() {
        return this.request("post_player_comment", "POST", {});
    }

    async public_info() {
        return this.request("public_info", "GET", {});
    }

    async reset_votemap_state() {
        return this.request("reset_votemap_state", "POST", {});
    }

    async run_raw_command() {
        return this.request("run_raw_command", "POST", {});
    }

    async server_list() {
        return this.request("server_list", "GET", {});
    }

    async set_admin_pings_discord_webhooks_config() {
        return this.request(
            "set_admin_pings_discord_webhooks_config",
            "POST",
            {}
        );
    }

    async set_audit_discord_webhooks_config() {
        return this.request("set_audit_discord_webhooks_config", "POST", {});
    }

    async set_auto_broadcasts_config() {
        return this.request("set_auto_broadcasts_config", "POST", {});
    }

    async set_auto_mod_level_config() {
        return this.request("set_auto_mod_level_config", "POST", {});
    }

    async set_auto_mod_no_leader_config() {
        return this.request("set_auto_mod_no_leader_config", "POST", {});
    }

    async set_auto_mod_seeding_config() {
        return this.request("set_auto_mod_seeding_config", "POST", {});
    }

    async set_auto_mod_solo_tank_config() {
        return this.request("set_auto_mod_solo_tank_config", "POST", {});
    }

    async set_auto_settings() {
        return this.request("set_auto_settings", "POST", {});
    }

    async set_autobalance_enabled(bool_) {
        return this.request("set_autobalance_enabled", "POST", {
            bool_: bool_,
        });
    }

    async set_autobalance_threshold(max_diff) {
        return this.request("set_autobalance_threshold", "POST", {
            max_diff: max_diff,
        });
    }

    async set_broadcast(msg, save) {
        return this.request("set_broadcast", "POST", { msg: msg, save: save });
    }

    async set_camera_discord_webhooks_config() {
        return this.request("set_camera_discord_webhooks_config", "POST", {});
    }

    async set_camera_notification_config() {
        return this.request("set_camera_notification_config", "POST", {});
    }

    async set_chat_commands_config() {
        return this.request("set_chat_commands_config", "POST", {});
    }

    async set_chat_discord_webhooks_config() {
        return this.request("set_chat_discord_webhooks_config", "POST", {});
    }

    async set_expired_vip_config() {
        return this.request("set_expired_vip_config", "POST", {});
    }

    async set_idle_autokick_time(minutes) {
        return this.request("set_idle_autokick_time", "POST", {
            minutes: minutes,
        });
    }

    async set_kills_discord_webhooks_config() {
        return this.request("set_kills_discord_webhooks_config", "POST", {});
    }

    async set_log_line_webhook_config() {
        return this.request("set_log_line_webhook_config", "POST", {});
    }

    async set_log_stream_config() {
        return this.request("set_log_stream_config", "POST", {});
    }

    async set_map(map_name) {
        return this.request("set_map", "POST", { map_name: map_name });
    }

    async set_map_shuffle_enabled(enabled) {
        return this.request("set_map_shuffle_enabled", "POST", {
            enabled: enabled,
        });
    }

    async set_maprotation(rotation) {
        return this.request("set_maprotation", "POST", { rotation: rotation });
    }

    async set_max_ping_autokick(max_ms) {
        return this.request("set_max_ping_autokick", "POST", {
            max_ms: max_ms,
        });
    }

    async set_name() {
        return this.request("set_name", "POST", {});
    }

    async set_name_kick_config() {
        return this.request("set_name_kick_config", "POST", {});
    }

    async set_profanities(profanities) {
        return this.request("set_profanities", "POST", {
            profanities: profanities,
        });
    }

    async set_queue_length(num) {
        return this.request("set_queue_length", "POST", { num: num });
    }

    async set_rcon_connection_settings_config() {
        return this.request("set_rcon_connection_settings_config", "POST", {});
    }

    async set_rcon_server_settings_config() {
        return this.request("set_rcon_server_settings_config", "POST", {});
    }

    async set_real_vip_config() {
        return this.request("set_real_vip_config", "POST", {});
    }

    async set_scorebot_config() {
        return this.request("set_scorebot_config", "POST", {});
    }

    async set_server_name_change_config() {
        return this.request("set_server_name_change_config", "POST", {});
    }

    async set_standard_broadcast_messages() {
        return this.request("set_standard_broadcast_messages", "POST", {});
    }

    async set_standard_punishments_messages() {
        return this.request("set_standard_punishments_messages", "POST", {});
    }

    async set_standard_welcome_messages() {
        return this.request("set_standard_welcome_messages", "POST", {});
    }

    async set_steam_config() {
        return this.request("set_steam_config", "POST", {});
    }

    async set_team_switch_cooldown(minutes) {
        return this.request("set_team_switch_cooldown", "POST", {
            minutes: minutes,
        });
    }

    async set_tk_ban_on_connect_config() {
        return this.request("set_tk_ban_on_connect_config", "POST", {});
    }

    async set_vac_game_bans_config() {
        return this.request("set_vac_game_bans_config", "POST", {});
    }

    async set_vip_slots_num(num) {
        return this.request("set_vip_slots_num", "POST", { num: num });
    }

    async set_votekick_autotoggle_config() {
        return this.request("set_votekick_autotoggle_config", "POST", {});
    }

    async set_votekick_enabled(bool_) {
        return this.request("set_votekick_enabled", "POST", { bool_: bool_ });
    }

    async set_votekick_threshold(threshold_pairs) {
        return this.request("set_votekick_threshold", "POST", {
            threshold_pairs: threshold_pairs,
        });
    }

    async set_votemap_config() {
        return this.request("set_votemap_config", "POST", {});
    }

    async set_watchlist_discord_webhooks_config() {
        return this.request(
            "set_watchlist_discord_webhooks_config",
            "POST",
            {}
        );
    }

    async set_welcome_message(msg, save) {
        return this.request("set_welcome_message", "POST", {
            msg: msg,
            save: save,
        });
    }

    async unban() {
        return this.request("unban", "POST", {});
    }

    async unblacklist_player() {
        return this.request("unblacklist_player", "POST", {});
    }

    async unflag_player() {
        return this.request("unflag_player", "POST", {});
    }

    async upload_vips() {
        return this.request("upload_vips", "POST", {});
    }

    async validate_admin_pings_discord_webhooks_config() {
        return this.request(
            "validate_admin_pings_discord_webhooks_config",
            "POST",
            {}
        );
    }

    async validate_audit_discord_webhooks_config() {
        return this.request(
            "validate_audit_discord_webhooks_config",
            "POST",
            {}
        );
    }

    async validate_auto_broadcasts_config() {
        return this.request("validate_auto_broadcasts_config", "POST", {});
    }

    async validate_auto_mod_level_config() {
        return this.request("validate_auto_mod_level_config", "POST", {});
    }

    async validate_auto_mod_no_leader_config() {
        return this.request("validate_auto_mod_no_leader_config", "POST", {});
    }

    async validate_auto_mod_seeding_config() {
        return this.request("validate_auto_mod_seeding_config", "POST", {});
    }

    async validate_auto_mod_solo_tank_config() {
        return this.request("validate_auto_mod_solo_tank_config", "POST", {});
    }

    async validate_camera_discord_webhooks_config() {
        return this.request(
            "validate_camera_discord_webhooks_config",
            "POST",
            {}
        );
    }

    async validate_camera_notification_config() {
        return this.request("validate_camera_notification_config", "POST", {});
    }

    async validate_chat_commands_config() {
        return this.request("validate_chat_commands_config", "POST", {});
    }

    async validate_chat_discord_webhooks_config() {
        return this.request(
            "validate_chat_discord_webhooks_config",
            "POST",
            {}
        );
    }

    async validate_expired_vip_config() {
        return this.request("validate_expired_vip_config", "POST", {});
    }

    async validate_kills_discord_webhooks_config() {
        return this.request(
            "validate_kills_discord_webhooks_config",
            "POST",
            {}
        );
    }

    async validate_log_line_webhook_config() {
        return this.request("validate_log_line_webhook_config", "POST", {});
    }

    async validate_log_stream_config() {
        return this.request("validate_log_stream_config", "POST", {});
    }

    async validate_name_kick_config() {
        return this.request("validate_name_kick_config", "POST", {});
    }

    async validate_rcon_connection_settings_config() {
        return this.request(
            "validate_rcon_connection_settings_config",
            "POST",
            {}
        );
    }

    async validate_rcon_server_settings_config() {
        return this.request("validate_rcon_server_settings_config", "POST", {});
    }

    async validate_real_vip_config() {
        return this.request("validate_real_vip_config", "POST", {});
    }

    async validate_scorebot_config() {
        return this.request("validate_scorebot_config", "POST", {});
    }

    async validate_server_name_change_config() {
        return this.request("validate_server_name_change_config", "POST", {});
    }

    async validate_standard_broadcast_messages() {
        return this.request("validate_standard_broadcast_messages", "POST", {});
    }

    async validate_standard_punishments_messages() {
        return this.request(
            "validate_standard_punishments_messages",
            "POST",
            {}
        );
    }

    async validate_standard_welcome_messages() {
        return this.request("validate_standard_welcome_messages", "POST", {});
    }

    async validate_steam_config() {
        return this.request("validate_steam_config", "POST", {});
    }

    async validate_tk_ban_on_connect_config() {
        return this.request("validate_tk_ban_on_connect_config", "POST", {});
    }

    async validate_vac_game_bans_config() {
        return this.request("validate_vac_game_bans_config", "POST", {});
    }

    async validate_votekick_autotoggle_config() {
        return this.request("validate_votekick_autotoggle_config", "POST", {});
    }

    async validate_votemap_config() {
        return this.request("validate_votemap_config", "POST", {});
    }

    async validate_watchlist_discord_webhooks_config() {
        return this.request(
            "validate_watchlist_discord_webhooks_config",
            "POST",
            {}
        );
    }
}

// Usage example
// const api = new API('https://your-api-url.com');
// api.getAdminGroups().then(data => console.log(data)).catch(error => console.error(error));

module.exports = API;
