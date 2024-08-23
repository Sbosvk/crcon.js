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
            const queryParams = new URLSearchParams(args).toString();
            url += queryParams ? `?${queryParams}` : "";
        }

        if (args && method === "POST") {
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

    // GET Endpoints

    async get_admin_groups() {
        return this.request("get_admin_groups", "GET");
    }

    async get_admin_ids() {
        return this.request("get_admin_ids", "GET");
    }

    async get_admin_pings_discord_webhooks_config() {
        return this.request("get_admin_pings_discord_webhooks_config", "GET");
    }

    async get_all_discord_webhooks_config() {
        return this.request("get_all_discord_webhooks_config", "GET");
    }

    async get_all_standard_message_config() {
        return this.request("get_all_standard_message_config", "GET");
    }

    async get_audit_discord_webhooks_config() {
        return this.request("get_audit_discord_webhooks_config", "GET");
    }

    async get_audit_logs() {
        return this.request("get_audit_logs", "GET");
    }

    async get_audit_logs_autocomplete() {
        return this.request("get_audit_logs_autocomplete", "GET");
    }

    async get_auto_broadcasts_config() {
        return this.request("get_auto_broadcasts_config", "GET");
    }

    async get_auto_mod_level_config() {
        return this.request("get_auto_mod_level_config", "GET");
    }

    async get_auto_mod_no_leader_config() {
        return this.request("get_auto_mod_no_leader_config", "GET");
    }

    async get_auto_mod_seeding_config() {
        return this.request("get_auto_mod_seeding_config", "GET");
    }

    async get_auto_mod_solo_tank_config() {
        return this.request("get_auto_mod_solo_tank_config", "GET");
    }

    async get_auto_settings() {
        return this.request("get_auto_settings", "GET");
    }

    async get_autobalance_enabled() {
        return this.request("get_autobalance_enabled", "GET");
    }

    async get_autobalance_threshold() {
        return this.request("get_autobalance_threshold", "GET");
    }

    async get_ban({ player_id = null } = {}) {
        return this.request("get_ban", "GET", { player_id });
    }

    async get_bans() {
        return this.request("get_bans", "GET");
    }

    async get_blacklist({ blacklist_id = null } = {}) {
        return this.request("get_blacklist", "GET", { blacklist_id });
    }

    async get_blacklist_records({
        player_id = "None",
        reason = "None",
        blacklist_id = "None",
        exclude_expired = "False",
        page_size = 50,
        page = 1,
    } = {}) {
        return this.request("get_blacklist_records", "GET", {
            player_id,
            reason,
            blacklist_id,
            exclude_expired,
            page_size,
            page,
        });
    }

    async get_blacklists() {
        return this.request("get_blacklists", "GET");
    }

    async get_broadcast_message() {
        return this.request("get_broadcast_message", "GET");
    }

    async get_camera_discord_webhooks_config() {
        return this.request("get_camera_discord_webhooks_config", "GET");
    }

    async get_camera_notification_config() {
        return this.request("get_camera_notification_config", "GET");
    }

    async get_chat_commands_config() {
        return this.request("get_chat_commands_config", "GET");
    }

    async get_chat_discord_webhooks_config() {
        return this.request("get_chat_discord_webhooks_config", "GET");
    }

    async get_connection_info() {
        return this.request("get_connection_info", "GET");
    }

    async get_current_map_sequence() {
        return this.request("get_current_map_sequence", "GET");
    }

    async get_date_scoreboard({ start = null, end = null } = {}) {
        return this.request("get_date_scoreboard", "GET", { start, end });
    }

    async get_detailed_player_info({ player_name = null } = {}) {
        return this.request("get_detailed_player_info", "GET", { player_name });
    }

    async get_detailed_players() {
        return this.request("get_detailed_players", "GET");
    }

    async get_expired_vip_config() {
        return this.request("get_expired_vip_config", "GET");
    }

    async get_gamestate() {
        return this.request("get_gamestate", "GET");
    }

    async get_historical_logs({
        player_name = "None",
        player_id = "None",
        action = "None",
        limit = 1000,
        from_ = "None",
        till = "None",
        time_sort = "desc",
        exact_player_match = "False",
        exact_action = "True",
        server_filter = "None",
    } = {}) {
        return this.request("get_historical_logs", "GET", {
            player_name,
            player_id,
            action,
            limit,
            from_,
            till,
            time_sort,
            exact_player_match,
            exact_action,
            server_filter,
        });
    }

    async get_historical_logs_csv() {
        return this.request("get_historical_logs_csv", "GET");
    }

    async get_idle_autokick_time() {
        return this.request("get_idle_autokick_time", "GET");
    }

    async get_ingame_mods() {
        return this.request("get_ingame_mods", "GET");
    }

    async get_kills_discord_webhooks_config() {
        return this.request("get_kills_discord_webhooks_config", "GET");
    }

    async get_live_game_stats() {
        return this.request("get_live_game_stats", "GET");
    }

    async get_live_scoreboard() {
        return this.request("get_live_scoreboard", "GET");
    }

    async get_log_line_webhook_config() {
        return this.request("get_log_line_webhook_config", "GET");
    }

    async get_log_stream_config() {
        return this.request("get_log_stream_config", "GET");
    }

    async get_logs({
        since_min_ago = null,
        filter_ = "",
        by = "",
    } = {}) {
        return this.request("get_logs", "GET", { since_min_ago, filter_, by });
    }

    async get_map() {
        return this.request("get_map", "GET");
    }

    async get_map_history() {
        return this.request("get_map_history", "GET");
    }

    async get_map_rotation() {
        return this.request("get_map_rotation", "GET");
    }

    async get_map_scoreboard() {
        return this.request("get_map_scoreboard", "GET");
    }

    async get_map_shuffle_enabled() {
        return this.request("get_map_shuffle_enabled", "GET");
    }

    async get_maps() {
        return this.request("get_maps", "GET");
    }

    async get_max_ping_autokick() {
        return this.request("get_max_ping_autokick", "GET");
    }

    async get_name() {
        return this.request("get_name", "GET");
    }

    async get_name_kick_config() {
        return this.request("get_name_kick_config", "GET");
    }

    async get_next_map() {
        return this.request("get_next_map", "GET");
    }

    async get_online_mods() {
        return this.request("get_online_mods", "GET");
    }

    async get_own_user_permissions() {
        return this.request("get_own_user_permissions", "GET");
    }

    async get_perma_bans() {
        return this.request("get_perma_bans", "GET");
    }

    async get_player_comments({ player_id = null } = {}) {
        return this.request("get_player_comments", "GET", { player_id });
    }

    async get_player_info({ player_name = null, can_fail = "False" } = {}) {
        return this.request("get_player_info", "GET", { player_name, can_fail });
    }

    async get_player_messages({ player_id = null } = {}) {
        return this.request("get_player_messages", "GET", { player_id });
    }

    async get_player_profile({
        player_id = null,
        num_sessions = 10,
    } = {}) {
        return this.request("get_player_profile", "GET", {
            player_id,
            num_sessions,
        });
    }

    async get_playerids({ as_dict = "False" } = {}) {
        return this.request("get_playerids", "GET", { as_dict });
    }

    async get_players() {
        return this.request("get_players", "GET");
    }

    async get_players_history({
        page = 1,
        page_size = 500,
        last_seen_from = "None",
        last_seen_till = "None",
        player_id = "None",
        player_name = "None",
        blacklisted = "None",
        is_watched = "None",
        exact_name_match = "False",
        ignore_accent = "True",
        flags = "None",
        country = "None",
    } = {}) {
        return this.request("get_players_history", "GET", {
            page,
            page_size,
            last_seen_from,
            last_seen_till,
            player_id,
            player_name,
            blacklisted,
            is_watched,
            exact_name_match,
            ignore_accent,
            flags,
            country,
        });
    }

    async get_previous_map() {
        return this.request("get_previous_map", "GET");
    }

    async get_profanities() {
        return this.request("get_profanities", "GET");
    }

    async get_public_info() {
        return this.request("get_public_info", "GET");
    }

    async get_queue_length() {
        return this.request("get_queue_length", "GET");
    }

    async get_rcon_connection_settings_config() {
        return this.request("get_rcon_connection_settings_config", "GET");
    }

    async get_rcon_server_settings_config() {
        return this.request("get_rcon_server_settings_config", "GET");
    }

    async get_real_vip_config() {
        return this.request("get_real_vip_config", "GET");
    }

    async get_recent_logs({
        filter_player = "[]",
        filter_action = "[]",
        inclusive_filter = "True",
        start = 0,
        end = 10000,
        exact_player_match = "True",
        exact_action = "False",
    } = {}) {
        return this.request("get_recent_logs", "GET", {
            filter_player,
            filter_action,
            inclusive_filter,
            start,
            end,
            exact_player_match,
            exact_action,
        });
    }

    async get_round_time_remaining() {
        return this.request("get_round_time_remaining", "GET");
    }

    async get_scoreboard_maps() {
        return this.request("get_scoreboard_maps", "GET");
    }

    async get_scorebot_config() {
        return this.request("get_scorebot_config", "GET");
    }

    async get_server_list() {
        return this.request("get_server_list", "GET");
    }

    async get_server_name_change_config() {
        return this.request("get_server_name_change_config", "GET");
    }

    async get_server_settings() {
        return this.request("get_server_settings", "GET");
    }

    async get_services() {
        return this.request("get_services", "GET");
    }

    async get_slots() {
        return this.request("get_slots", "GET");
    }

    async get_standard_broadcast_messages() {
        return this.request("get_standard_broadcast_messages", "GET");
    }

    async get_standard_punishments_messages() {
        return this.request("get_standard_punishments_messages", "GET");
    }

    async get_standard_welcome_messages() {
        return this.request("get_standard_welcome_messages", "GET");
    }

    async get_status() {
        return this.request("get_status", "GET");
    }

    async get_steam_config() {
        return this.request("get_steam_config", "GET");
    }

    async get_structured_logs({
        since_min_ago = null,
        filter_action = "None",
        filter_player = "None",
    } = {}) {
        return this.request("get_structured_logs", "GET", {
            since_min_ago,
            filter_action,
            filter_player,
        });
    }

    async get_team_objective_scores() {
        return this.request("get_team_objective_scores", "GET");
    }

    async get_team_switch_cooldown() {
        return this.request("get_team_switch_cooldown", "GET");
    }

    async get_team_view() {
        return this.request("get_team_view", "GET");
    }

    async get_temp_bans() {
        return this.request("get_temp_bans", "GET");
    }

    async get_tk_ban_on_connect_config() {
        return this.request("get_tk_ban_on_connect_config", "GET");
    }

    async get_vac_game_bans_config() {
        return this.request("get_vac_game_bans_config", "GET");
    }

    async get_version() {
        return this.request("get_version", "GET");
    }

    async get_vip_ids() {
        return this.request("get_vip_ids", "GET");
    }

    async get_vip_slots_num() {
        return this.request("get_vip_slots_num", "GET");
    }

    async get_vips_count() {
        return this.request("get_vips_count", "GET");
    }

    async get_votekick_autotoggle_config() {
        return this.request("get_votekick_autotoggle_config", "GET");
    }

    async get_votekick_enabled() {
        return this.request("get_votekick_enabled", "GET");
    }

    async get_votekick_thresholds() {
        return this.request("get_votekick_thresholds", "GET");
    }

    async get_votemap_config() {
        return this.request("get_votemap_config", "GET");
    }

    async get_votemap_status() {
        return this.request("get_votemap_status", "GET");
    }

    async get_votemap_whitelist() {
        return this.request("get_votemap_whitelist", "GET");
    }

    async get_watchlist_discord_webhooks_config() {
        return this.request("get_watchlist_discord_webhooks_config", "GET");
    }

    async get_welcome_message() {
        return this.request("get_welcome_message", "GET");
    }

    async is_logged_in() {
        return this.request("is_logged_in", "GET");
    }

    // POST Endpoints

    async add_admin({
        player_id = null,
        role = null,
        description = null,
    } = {}) {
        return this.request("add_admin", "POST", {
            player_id,
            role,
            description,
        });
    }

    async add_blacklist_record({
        player_id = null,
        blacklist_id = null,
        reason = null,
        expires_at = "None",
        admin_name = "",
    } = {}) {
        return this.request("add_blacklist_record", "POST", {
            player_id,
            blacklist_id,
            reason,
            expires_at,
            admin_name,
        });
    }

    async add_map_to_rotation({
        map_name = null,
        after_map_name = "None",
        after_map_name_number = "None",
    } = {}) {
        return this.request("add_map_to_rotation", "POST", {
            map_name,
            after_map_name,
            after_map_name_number,
        });
    }

    async add_map_to_votemap_whitelist({ map_name = null } = {}) {
        return this.request("add_map_to_votemap_whitelist", "POST", {
            map_name,
        });
    }

    async add_maps_to_rotation({ map_names = null } = {}) {
        return this.request("add_maps_to_rotation", "POST", {
            map_names,
        });
    }

    async add_maps_to_votemap_whitelist({ map_names = null } = {}) {
        return this.request("add_maps_to_votemap_whitelist", "POST", {
            map_names,
        });
    }

    async add_vip({
        player_id = null,
        description = null,
        expiration = "None",
    } = {}) {
        return this.request("add_vip", "POST", {
            player_id,
            description,
            expiration,
        });
    }

    async ban_profanities({ profanities = null } = {}) {
        return this.request("ban_profanities", "POST", {
            profanities,
        });
    }

    async clear_cache() {
        return this.request("clear_cache", "POST");
    }

    async create_blacklist({
        name = null,
        sync = "BlacklistSyncMethod.KICK_ONLY",
        servers = "None",
    } = {}) {
        return this.request("create_blacklist", "POST", {
            name,
            sync,
            servers,
        });
    }

    async delete_blacklist({ blacklist_id = null } = {}) {
        return this.request("delete_blacklist", "POST", { blacklist_id });
    }

    async delete_blacklist_record({ record_id = null } = {}) {
        return this.request("delete_blacklist_record", "POST", { record_id });
    }

    async describe_admin_pings_discord_webhooks_config() {
        return this.request("describe_admin_pings_discord_webhooks_config", "GET");
    }

    async describe_audit_discord_webhooks_config() {
        return this.request("describe_audit_discord_webhooks_config", "GET");
    }

    async describe_auto_broadcasts_config() {
        return this.request("describe_auto_broadcasts_config", "GET");
    }

    async describe_auto_mod_level_config() {
        return this.request("describe_auto_mod_level_config", "GET");
    }

    async describe_auto_mod_no_leader_config() {
        return this.request("describe_auto_mod_no_leader_config", "GET");
    }

    async describe_auto_mod_seeding_config() {
        return this.request("describe_auto_mod_seeding_config", "GET");
    }

    async describe_auto_mod_solo_tank_config() {
        return this.request("describe_auto_mod_solo_tank_config", "GET");
    }

    async describe_camera_discord_webhooks_config() {
        return this.request("describe_camera_discord_webhooks_config", "GET");
    }

    async describe_camera_notification_config() {
        return this.request("describe_camera_notification_config", "GET");
    }

    async describe_chat_commands_config() {
        return this.request("describe_chat_commands_config", "GET");
    }

    async describe_chat_discord_webhooks_config() {
        return this.request("describe_chat_discord_webhooks_config", "GET");
    }

    async describe_expired_vip_config() {
        return this.request("describe_expired_vip_config", "GET");
    }

    async describe_kills_discord_webhooks_config() {
        return this.request("describe_kills_discord_webhooks_config", "GET");
    }

    async describe_log_line_webhook_config() {
        return this.request("describe_log_line_webhook_config", "GET");
    }

    async describe_log_stream_config() {
        return this.request("describe_log_stream_config", "GET");
    }

    async describe_name_kick_config() {
        return this.request("describe_name_kick_config", "GET");
    }

    async describe_rcon_connection_settings_config() {
        return this.request("describe_rcon_connection_settings_config", "GET");
    }

    async describe_rcon_server_settings_config() {
        return this.request("describe_rcon_server_settings_config", "GET");
    }

    async describe_real_vip_config() {
        return this.request("describe_real_vip_config", "GET");
    }

    async describe_scorebot_config() {
        return this.request("describe_scorebot_config", "GET");
    }

    async describe_server_name_change_config() {
        return this.request("describe_server_name_change_config", "GET");
    }

    async describe_standard_broadcast_messages() {
        return this.request("describe_standard_broadcast_messages", "GET");
    }

    async describe_standard_punishments_messages() {
        return this.request("describe_standard_punishments_messages", "GET");
    }

    async describe_standard_welcome_messages() {
        return this.request("describe_standard_welcome_messages", "GET");
    }

    async describe_steam_config() {
        return this.request("describe_steam_config", "GET");
    }

    async describe_tk_ban_on_connect_config() {
        return this.request("describe_tk_ban_on_connect_config", "GET");
    }

    async describe_vac_game_bans_config() {
        return this.request("describe_vac_game_bans_config", "GET");
    }

    async describe_votekick_autotoggle_config() {
        return this.request("describe_votekick_autotoggle_config", "GET");
    }

    async describe_votemap_config() {
        return this.request("describe_votemap_config", "GET");
    }

    async describe_watchlist_discord_webhooks_config() {
        return this.request("describe_watchlist_discord_webhooks_config", "GET");
    }

    async do_service() {
        return this.request("do_service", "POST");
    }

    async download_vips() {
        return this.request("download_vips", "GET");
    }

    async edit_blacklist({
        blacklist_id = null,
        name = "MISSING",
        sync_method = "MISSING",
        servers = "MISSING",
    } = {}) {
        return this.request("edit_blacklist", "POST", {
            blacklist_id,
            name,
            sync_method,
            servers,
        });
    }

    async edit_blacklist_record({
        record_id = null,
        blacklist_id = "MISSING",
        reason = "MISSING",
        expires_at = "MISSING",
    } = {}) {
        return this.request("edit_blacklist_record", "POST", {
            record_id,
            blacklist_id,
            reason,
            expires_at,
        });
    }

    async flag_player({
        player_id = null,
        flag = null,
        player_name = "None",
        comment = "None",
    } = {}) {
        return this.request("flag_player", "POST", {
            player_id,
            flag,
            player_name,
            comment,
        });
    }

    async kick({
        player_name = null,
        reason = null,
        by = null,
        player_id = "None",
    } = {}) {
        return this.request("kick", "POST", {
            player_name,
            reason,
            by,
            player_id,
        });
    }

    async login() {
        return this.request("login", "POST");
    }

    async logout() {
        return this.request("logout", "POST");
    }

    async message_player({
        player_name = "None",
        player_id = "None",
        message = "",
        by = "",
        save_message = "False",
    } = {}) {
        return this.request("message_player", "POST", {
            player_name,
            player_id,
            message,
            by,
            save_message,
        });
    }

    async perma_ban({
        player_name = "None",
        player_id = "None",
        reason = "",
        by = "",
    } = {}) {
        return this.request("perma_ban", "POST", {
            player_name,
            player_id,
            reason,
            by,
        });
    }

    async post_player_comment({
        player_id = null,
        comment = null,
        by = null,
    } = {}) {
        return this.request("post_player_comment", "POST", {
            player_id,
            comment,
            by,
        });
    }

    async punish({
        player_name = null,
        reason = null,
        by = null,
    } = {}) {
        return this.request("punish", "POST", {
            player_name,
            reason,
            by,
        });
    }

    async reconnect_gameserver() {
        return this.request("reconnect_gameserver", "POST");
    }

    async remove_admin({ player_id = null } = {}) {
        return this.request("remove_admin", "POST", { player_id });
    }

    async remove_all_vips() {
        return this.request("remove_all_vips", "POST");
    }

    async remove_map_from_rotation({
        map_name = null,
        map_number = "None",
    } = {}) {
        return this.request("remove_map_from_rotation", "POST", {
            map_name,
            map_number,
        });
    }

    async remove_map_from_votemap_whitelist({ map_name = null } = {}) {
        return this.request("remove_map_from_votemap_whitelist", "POST", {
            map_name,
        });
    }

    async remove_maps_from_rotation({ map_names = null } = {}) {
        return this.request("remove_maps_from_rotation", "POST", {
            map_names,
        });
    }

    async remove_maps_from_votemap_whitelist({ map_names = null } = {}) {
        return this.request("remove_maps_from_votemap_whitelist", "POST", {
            map_names,
        });
    }

    async remove_perma_ban({ player_id = null } = {}) {
        return this.request("remove_perma_ban", "POST", { player_id });
    }

    async remove_temp_ban({ player_id = null } = {}) {
        return this.request("remove_temp_ban", "POST", { player_id });
    }

    async remove_vip({ player_id = null } = {}) {
        return this.request("remove_vip", "POST", { player_id });
    }

    async reset_map_votemap_whitelist() {
        return this.request("reset_map_votemap_whitelist", "POST");
    }

    async reset_votekick_thresholds() {
        return this.request("reset_votekick_thresholds", "POST");
    }

    async reset_votemap_state() {
        return this.request("reset_votemap_state", "POST");
    }

    async run_raw_command() {
        return this.request("run_raw_command", "POST");
    }

    async set_admin_pings_discord_webhooks_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_admin_pings_discord_webhooks_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_audit_discord_webhooks_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_audit_discord_webhooks_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_auto_broadcasts_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_auto_broadcasts_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_auto_mod_level_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_auto_mod_level_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_auto_mod_no_leader_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_auto_mod_no_leader_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_auto_mod_seeding_config({
        by = null,
        user_config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_auto_mod_seeding_config", "POST", {
            by,
            user_config,
            reset_to_default,
            kwargs,
        });
    }

    async set_auto_mod_solo_tank_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_auto_mod_solo_tank_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_auto_settings() {
        return this.request("set_auto_settings", "POST");
    }

    async set_autobalance_enabled({ value = null } = {}) {
        return this.request("set_autobalance_enabled", "POST", { value });
    }

    async set_autobalance_threshold({ max_diff = null } = {}) {
        return this.request("set_autobalance_threshold", "POST", { max_diff });
    }

    async set_broadcast({ message = null } = {}) {
        return this.request("set_broadcast", "POST", { message });
    }

    async set_camera_discord_webhooks_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_camera_discord_webhooks_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_camera_notification_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_camera_notification_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_chat_commands_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_chat_commands_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_chat_discord_webhooks_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_chat_discord_webhooks_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_expired_vip_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_expired_vip_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_idle_autokick_time({ minutes = null } = {}) {
        return this.request("set_idle_autokick_time", "POST", { minutes });
    }

    async set_kills_discord_webhooks_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_kills_discord_webhooks_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_log_line_webhook_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_log_line_webhook_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_log_stream_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_log_stream_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_map({ map_name = null } = {}) {
        return this.request("set_map", "POST", { map_name });
    }

    async set_map_shuffle_enabled({ enabled = null } = {}) {
        return this.request("set_map_shuffle_enabled", "POST", { enabled });
    }

    async set_maprotation({ map_names = null } = {}) {
        return this.request("set_maprotation", "POST", { map_names });
    }

    async set_max_ping_autokick({ max_ms = null } = {}) {
        return this.request("set_max_ping_autokick", "POST", { max_ms });
    }

    async set_name_kick_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_name_kick_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_profanities({ profanities = null } = {}) {
        return this.request("set_profanities", "POST", { profanities });
    }

    async set_queue_length({ value = null } = {}) {
        return this.request("set_queue_length", "POST", { value });
    }

    async set_rcon_connection_settings_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_rcon_connection_settings_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_rcon_server_settings_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_rcon_server_settings_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_real_vip_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_real_vip_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_scorebot_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_scorebot_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_server_name({ name = null } = {}) {
        return this.request("set_server_name", "POST", { name });
    }

    async set_server_name_change_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_server_name_change_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_standard_broadcast_messages({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_standard_broadcast_messages", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_standard_punishments_messages({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_standard_punishments_messages", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_standard_welcome_messages({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_standard_welcome_messages", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_steam_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_steam_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_team_switch_cooldown({ minutes = null } = {}) {
        return this.request("set_team_switch_cooldown", "POST", { minutes });
    }

    async set_tk_ban_on_connect_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_tk_ban_on_connect_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_vac_game_bans_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_vac_game_bans_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_vip_slots_num({ value = null } = {}) {
        return this.request("set_vip_slots_num", "POST", { value });
    }

    async set_votekick_autotoggle_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_votekick_autotoggle_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_votekick_enabled({ value = null } = {}) {
        return this.request("set_votekick_enabled", "POST", { value });
    }

    async set_votekick_thresholds({ threshold_pairs = null } = {}) {
        return this.request("set_votekick_thresholds", "POST", {
            threshold_pairs,
        });
    }

    async set_votemap_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_votemap_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_votemap_whitelist({ map_names = null } = {}) {
        return this.request("set_votemap_whitelist", "POST", {
            map_names,
        });
    }

    async set_watchlist_discord_webhooks_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("set_watchlist_discord_webhooks_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async set_welcome_message({ message = null } = {}) {
        return this.request("set_welcome_message", "POST", { message });
    }

    async switch_player_now({ player_name = null } = {}) {
        return this.request("switch_player_now", "POST", { player_name });
    }

    async switch_player_on_death({
        player_name = null,
        by = null,
    } = {}) {
        return this.request("switch_player_on_death", "POST", {
            player_name,
            by,
        });
    }

    async temp_ban({
        player_name = "None",
        player_id = "None",
        duration_hours = 2,
        reason = "",
        by = "",
    } = {}) {
        return this.request("temp_ban", "POST", {
            player_name,
            player_id,
            duration_hours,
            reason,
            by,
        });
    }

    async unban({ player_id = null } = {}) {
        return this.request("unban", "POST", { player_id });
    }

    async unban_profanities({ profanities = null } = {}) {
        return this.request("unban_profanities", "POST", {
            profanities,
        });
    }

    async unblacklist_player({ player_id = null } = {}) {
        return this.request("unblacklist_player", "POST", {
            player_id,
        });
    }

    async unflag_player({
        flag_id = "None",
        player_id = "None",
        flag = "None",
    } = {}) {
        return this.request("unflag_player", "POST", {
            flag_id,
            player_id,
            flag,
        });
    }

    async unwatch_player({ player_id = null } = {}) {
        return this.request("unwatch_player", "POST", {
            player_id,
        });
    }

    async upload_vips() {
        return this.request("upload_vips", "POST");
    }

    async upload_vips_result() {
        return this.request("upload_vips_result", "GET");
    }

    async validate_admin_pings_discord_webhooks_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_admin_pings_discord_webhooks_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_audit_discord_webhooks_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_audit_discord_webhooks_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_auto_broadcasts_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_auto_broadcasts_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_auto_mod_level_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_auto_mod_level_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_auto_mod_no_leader_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_auto_mod_no_leader_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_auto_mod_seeding_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_auto_mod_seeding_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_auto_mod_solo_tank_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_auto_mod_solo_tank_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_camera_discord_webhooks_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_camera_discord_webhooks_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_camera_notification_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_camera_notification_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_chat_commands_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_chat_commands_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_chat_discord_webhooks_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_chat_discord_webhooks_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_expired_vip_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_expired_vip_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_kills_discord_webhooks_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_kills_discord_webhooks_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_log_line_webhook_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_log_line_webhook_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_log_stream_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_log_stream_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_name_kick_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_name_kick_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_rcon_connection_settings_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_rcon_connection_settings_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_rcon_server_settings_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_rcon_server_settings_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_real_vip_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_real_vip_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_scorebot_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_scorebot_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_server_name_change_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_server_name_change_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_standard_broadcast_messages({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_standard_broadcast_messages", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_standard_punishments_messages({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_standard_punishments_messages", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_standard_welcome_messages({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_standard_welcome_messages", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_steam_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_steam_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_tk_ban_on_connect_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_tk_ban_on_connect_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_vac_game_bans_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_vac_game_bans_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_votekick_autotoggle_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_votekick_autotoggle_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_votemap_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_votemap_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async validate_watchlist_discord_webhooks_config({
        by = null,
        config = "None",
        reset_to_default = "False",
        kwargs = null,
    } = {}) {
        return this.request("validate_watchlist_discord_webhooks_config", "POST", {
            by,
            config,
            reset_to_default,
            kwargs,
        });
    }

    async watch_player({
        player_id = null,
        reason = null,
        by = null,
        player_name = "None",
    } = {}) {
        return this.request("watch_player", "POST", {
            player_id,
            reason,
            by,
            player_name,
        });
    }
}

module.exports = API;
