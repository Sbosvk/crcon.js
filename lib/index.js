// crcon.js
class API {
  constructor(baseURL, config = {}) {
    this.baseURL = baseURL;
    this.token = config.token || null;
  }

  async request(endpoint, method = 'GET', body = null) {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const options = {
      method,
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${this.baseURL}/${endpoint}`, options);
    return response.json();
  }
  
    async asyncUploadVips() {
      return this.request('async_upload_vips', 'POST');
    }
  
    async asyncUploadVipsResult() {
      return this.request('async_upload_vips_result', 'GET');
    }
  
    async blacklistPlayer() {
      return this.request('blacklist_player', 'POST');
    }
  
    async clearCache() {
      return this.request('clear_cache', 'POST');
    }
  
    async dateScoreboard() {
      return this.request('date_scoreboard', 'GET');
    }
  
    async describeAdminPingsDiscordWebhooksConfig() {
      return this.request('describe_admin_pings_discord_webhooks_config', 'GET');
    }
  
    async describeAuditDiscordWebhooksConfig() {
      return this.request('describe_audit_discord_webhooks_config', 'GET');
    }
  
    async describeAutoBroadcastsConfig() {
      return this.request('describe_auto_broadcasts_config', 'GET');
    }
  
    async describeAutoModLevelConfig() {
      return this.request('describe_auto_mod_level_config', 'GET');
    }
  
    async describeAutoModNoLeaderConfig() {
      return this.request('describe_auto_mod_no_leader_config', 'GET');
    }
  
    async describeAutoModSeedingConfig() {
      return this.request('describe_auto_mod_seeding_config', 'GET');
    }
  
    async describeAutoModSoloTankConfig() {
      return this.request('describe_auto_mod_solo_tank_config', 'GET');
    }
  
    async describeCameraDiscordWebhooksConfig() {
      return this.request('describe_camera_discord_webhooks_config', 'GET');
    }
  
    async describeCameraNotificationConfig() {
      return this.request('describe_camera_notification_config', 'GET');
    }
  
    async describeChatCommandsConfig() {
      return this.request('describe_chat_commands_config', 'GET');
    }
  
    async describeChatDiscordWebhooksConfig() {
      return this.request('describe_chat_discord_webhooks_config', 'GET');
    }
  
    async describeExpiredVipConfig() {
      return this.request('describe_expired_vip_config', 'GET');
    }
  
    async describeKillsDiscordWebhooksConfig() {
      return this.request('describe_kills_discord_webhooks_config', 'GET');
    }
  
    async describeLogLineWebhookConfig() {
      return this.request('describe_log_line_webhook_config', 'GET');
    }
  
    async describeLogStreamConfig() {
      return this.request('describe_log_stream_config', 'GET');
    }
  
    async describeNameKickConfig() {
      return this.request('describe_name_kick_config', 'GET');
    }
  
    async describeRconConnectionSettingsConfig() {
      return this.request('describe_rcon_connection_settings_config', 'GET');
    }
  
    async describeRconServerSettingsConfig() {
      return this.request('describe_rcon_server_settings_config', 'GET');
    }
  
    async describeRealVipConfig() {
      return this.request('describe_real_vip_config', 'GET');
    }
  
    async describeScorebotConfig() {
      return this.request('describe_scorebot_config', 'GET');
    }
  
    async describeServerNameChangeConfig() {
      return this.request('describe_server_name_change_config', 'GET');
    }
  
    async describeStandardBroadcastMessages() {
      return this.request('describe_standard_broadcast_messages', 'GET');
    }
  
    async describeStandardPunishmentsMessages() {
      return this.request('describe_standard_punishments_messages', 'GET');
    }
  
    async describeStandardWelcomeMessages() {
      return this.request('describe_standard_welcome_messages', 'GET');
    }
  
    async describeSteamConfig() {
      return this.request('describe_steam_config', 'GET');
    }
  
    async describeTkBanOnConnectConfig() {
      return this.request('describe_tk_ban_on_connect_config', 'GET');
    }
  
    async describeVacGameBansConfig() {
      return this.request('describe_vac_game_bans_config', 'GET');
    }
  
    async describeVotekickAutotoggleConfig() {
      return this.request('describe_votekick_autotoggle_config', 'GET');
    }
  
    async describeVotemapConfig() {
      return this.request('describe_votemap_config', 'GET');
    }
  
    async describeWatchlistDiscordWebhooksConfig() {
      return this.request('describe_watchlist_discord_webhooks_config', 'GET');
    }
  
    async doAddAdmin(steam_id_64, role, name) {
      return this.request('do_add_admin', 'POST', { steam_id_64, role, name });
    }
  
    async doAddMapToRotation(map_name, after_map_name = null, after_map_name_number = null) {
      return this.request('do_add_map_to_rotation', 'POST', { map_name, after_map_name, after_map_name_number });
    }
  
    async doAddMapToWhitelist() {
      return this.request('do_add_map_to_whitelist', 'POST');
    }
  
    async doAddMapsToRotation(maps) {
      return this.request('do_add_maps_to_rotation', 'POST', { maps });
    }
  
    async doAddMapsToWhitelist() {
      return this.request('do_add_maps_to_whitelist', 'POST');
    }
  
    async doAddVip(name, steam_id_64, expiration) {
      return this.request('do_add_vip', 'POST', { name, steam_id_64, expiration });
    }
  
    async doBanProfanities(profanities) {
      return this.request('do_ban_profanities', 'POST', { profanities });
    }
  
    async doKick(player, reason, by, steam_id_64 = null) {
      return this.request('do_kick', 'POST', { player, reason, by, steam_id_64 });
    }
  
    async doMessagePlayer(player = null, steam_id_64 = null, message, by, save_message = false) {
      return this.request('do_message_player', 'POST', { player, steam_id_64, message, by, save_message });
    }
  
    async doPermaBan(player = null, steam_id_64 = null, reason, by) {
      return this.request('do_perma_ban', 'POST', { player, steam_id_64, reason, by });
    }
  
    async doPunish(player, reason, by) {
      return this.request('do_punish', 'POST', { player, reason, by });
    }
  
    async doReconnectGameserver() {
      return this.request('do_reconnect_gameserver', 'POST');
    }
  
    async doRemoveAdmin(steam_id_64) {
      return this.request('do_remove_admin', 'POST', { steam_id_64 });
    }
  
    async doRemoveAllVips() {
      return this.request('do_remove_all_vips', 'POST');
    }
  
    async doRemoveMapFromRotation(map_name, map_number = null) {
      return this.request('do_remove_map_from_rotation', 'POST', { map_name, map_number });
    }
  
    async doRemoveMapFromWhitelist() {
      return this.request('do_remove_map_from_whitelist', 'POST');
    }
  
    async doRemoveMapsFromRotation(maps) {
      return this.request('do_remove_maps_from_rotation', 'POST', { maps });
    }
  
    async doRemoveMapsFromWhitelist() {
      return this.request('do_remove_maps_from_whitelist', 'POST');
    }
  
    async doRemovePermaBan(ban_log) {
      return this.request('do_remove_perma_ban', 'POST', { ban_log });
    }
  
    async doRemoveTempBan(ban_log = null, steam_id_64 = null) {
      return this.request('do_remove_temp_ban', 'POST', { ban_log, steam_id_64 });
    }
  
    async doRemoveVip(steam_id_64) {
      return this.request('do_remove_vip', 'POST', { steam_id_64 });
    }
  
    async doResetMapWhitelist() {
      return this.request('do_reset_map_whitelist', 'POST');
    }
  
    async doResetVotekickThreshold() {
      return this.request('do_reset_votekick_threshold', 'POST');
    }
  
    async doSaveSetting(name, value) {
      return this.request('do_save_setting', 'POST', { name, value });
    }
  
    async doService() {
      return this.request('do_service', 'POST');
    }
  
    async doSetMapWhitelist() {
      return this.request('do_set_map_whitelist', 'POST');
    }
  
    async doSwitchPlayerNow(player, by) {
      return this.request('do_switch_player_now', 'POST', { player, by });
    }
  
    async doSwitchPlayerOnDeath(player, by) {
      return this.request('do_switch_player_on_death', 'POST', { player, by });
    }
  
    async doTempBan(player = null, steam_id_64 = null, duration_hours = 2, reason = '', by = '') {
      return this.request('do_temp_ban', 'POST', { player, steam_id_64, duration_hours, reason, by });
    }
  
    async doUnban(steam_id_64) {
      return this.request('do_unban', 'POST', { steam_id_64 });
    }
  
    async doUnbanProfanities(profanities) {
      return this.request('do_unban_profanities', 'POST', { profanities });
    }
  
    async doUnwatchPlayer() {
      return this.request('do_unwatch_player', 'POST');
    }
  
    async doWatchPlayer() {
      return this.request('do_watch_player', 'POST');
    }
  
    async downloadVips() {
      return this.request('download_vips', 'GET');
    }
  
    async flagPlayer() {
      return this.request('flag_player', 'POST');
    }
  
    async getAdminGroups() {
      return this.request('get_admin_groups', 'GET');
    }
  
    async getAdminIds() {
      return this.request('get_admin_ids', 'GET');
    }
  
    async getAdminPingsDiscordWebhooksConfig() {
      return this.request('get_admin_pings_discord_webhooks_config', 'GET');
    }
  
    async getAllDiscordWebhooksConfig() {
      return this.request('get_all_discord_webhooks_config', 'GET');
    }
  
    async getAllStandardMessageConfig() {
      return this.request('get_all_standard_message_config', 'GET');
    }
  
    async getAuditDiscordWebhooksConfig() {
      return this.request('get_audit_discord_webhooks_config', 'GET');
    }
  
    async getAuditLogs() {
      return this.request('get_audit_logs', 'GET');
    }
  
    async getAuditLogsAutocomplete() {
      return this.request('get_audit_logs_autocomplete', 'GET');
    }
  
    async getAutoBroadcastsConfig() {
      return this.request('get_auto_broadcasts_config', 'GET');
    }
  
    async getAutoModLevelConfig() {
      return this.request('get_auto_mod_level_config', 'GET');
    }
  
    async getAutoModNoLeaderConfig() {
      return this.request('get_auto_mod_no_leader_config', 'GET');
    }
  
    async getAutoModSeedingConfig() {
      return this.request('get_auto_mod_seeding_config', 'GET');
    }
  
    async getAutoModSoloTankConfig() {
      return this.request('get_auto_mod_solo_tank_config', 'GET');
    }
  
    async getAutoSettings() {
      return this.request('get_auto_settings', 'GET');
    }
  
    async getAutobalanceEnabled() {
      return this.request('get_autobalance_enabled', 'GET');
    }
  
    async getAutobalanceThreshold() {
      return this.request('get_autobalance_threshold', 'GET');
    }
  
    async getBan(steam_id_64) {
      return this.request('get_ban', 'GET', { steam_id_64 });
    }
  
    async getBans() {
      return this.request('get_bans', 'GET');
    }
  
    async getBroadcastMessage() {
      return this.request('get_broadcast_message', 'GET');
    }
  
    async getCameraDiscordWebhooksConfig() {
      return this.request('get_camera_discord_webhooks_config', 'GET');
    }
  
    async getCameraNotificationConfig() {
      return this.request('get_camera_notification_config', 'GET');
    }
  
    async getChatCommandsConfig() {
      return this.request('get_chat_commands_config', 'GET');
    }
  
    async getChatDiscordWebhooksConfig() {
      return this.request('get_chat_discord_webhooks_config', 'GET');
    }
  
    async getConnectionInfo() {
      return this.request('get_connection_info', 'GET');
    }
  
    async getCurrentMapSequence() {
      return this.request('get_current_map_sequence', 'GET');
    }
  
    async getDetailedPlayerInfo(player) {
      return this.request('get_detailed_player_info', 'GET', { player });
    }
  
    async getDetailedPlayers() {
      return this.request('get_detailed_players', 'GET');
    }
  
    async getExpiredVipConfig() {
      return this.request('get_expired_vip_config', 'GET');
    }
  
    async getGamestate() {
      return this.request('get_gamestate', 'GET');
    }
  
    async getHistoricalLogs() {
      return this.request('get_historical_logs', 'GET');
    }
  
    async getIdleAutokickTime() {
      return this.request('get_idle_autokick_time', 'GET');
    }
  
    async getIngameMods() {
      return this.request('get_ingame_mods', 'GET');
    }
  
    async getKillsDiscordWebhooksConfig() {
      return this.request('get_kills_discord_webhooks_config', 'GET');
    }
  
    async getLiveGameStats() {
      return this.request('get_live_game_stats', 'GET');
    }
  
    async getLogLineWebhookConfig() {
      return this.request('get_log_line_webhook_config', 'GET');
    }
  
    async getLogStreamConfig() {
      return this.request('get_log_stream_config', 'GET');
    }
  
    async getLogs(args, kwargs) {
      return this.request('get_logs', 'GET', { args, kwargs });
    }
  
    async getMap() {
      return this.request('get_map', 'GET');
    }
  
    async getMapHistory() {
      return this.request('get_map_history', 'GET');
    }
  
    async getMapRotation() {
      return this.request('get_map_rotation', 'GET');
    }
  
    async getMapScoreboard() {
      return this.request('get_map_scoreboard', 'GET');
    }
  
    async getMapShuffleEnabled() {
      return this.request('get_map_shuffle_enabled', 'GET');
    }
  
    async getMapWhitelist() {
      return this.request('get_map_whitelist', 'GET');
    }
  
    async getMaps() {
      return this.request('get_maps', 'GET');
    }
  
    async getMaxPingAutokick() {
      return this.request('get_max_ping_autokick', 'GET');
    }
  
    async getName() {
      return this.request('get_name', 'GET');
    }
  
    async getNameKickConfig() {
      return this.request('get_name_kick_config', 'GET');
    }
  
    async getNextMap() {
      return this.request('get_next_map', 'GET');
    }
  
    async getOnlineConsoleAdmins() {
      return this.request('get_online_console_admins', 'GET');
    }
  
    async getOnlineMods() {
      return this.request('get_online_mods', 'GET');
    }
  
    async getOwnUserPermissions() {
      return this.request('get_own_user_permissions', 'GET');
    }
  
    async getPermaBans() {
      return this.request('get_perma_bans', 'GET');
    }
  
    async getPlayerComment() {
      return this.request('get_player_comment', 'GET');
    }
  
    async getPlayerInfo(player, can_fail = false) {
      return this.request('get_player_info', 'GET', { player, can_fail });
    }
  
    async getPlayerMessages() {
      return this.request('get_player_messages', 'GET');
    }
  
    async getPlayerIds(as_dict = false) {
      return this.request('get_playerids', 'GET', { as_dict });
    }
  
    async getPlayers() {
      return this.request('get_players', 'GET');
    }
  
    async getPlayersFast() {
      return this.request('get_players_fast', 'GET');
    }
  
    async getPreviousMap() {
      return this.request('get_previous_map', 'GET');
    }
  
    async getProfanities() {
      return this.request('get_profanities', 'GET');
    }
  
    async getQueueLength() {
      return this.request('get_queue_length', 'GET');
    }
  
    async getRconConnectionSettingsConfig() {
      return this.request('get_rcon_connection_settings_config', 'GET');
    }
  
    async getRconServerSettingsConfig() {
      return this.request('get_rcon_server_settings_config', 'GET');
    }
  
    async getRealVipConfig() {
      return this.request('get_real_vip_config', 'GET');
    }
  
    async getRecentLogs() {
      return this.request('get_recent_logs', 'GET');
    }
  
    async getRoundTimeRemaining() {
      return this.request('get_round_time_remaining', 'GET');
    }
  
    async getScoreboardMaps() {
      return this.request('get_scoreboard_maps', 'GET');
    }
  
    async getScorebotConfig() {
      return this.request('get_scorebot_config', 'GET');
    }
  
    async getServerNameChangeConfig() {
      return this.request('get_server_name_change_config', 'GET');
    }
  
    async getServerSettings() {
      return this.request('get_server_settings', 'GET');
    }
  
    async getServerStats() {
      return this.request('get_server_stats', 'GET');
    }
  
    async getServices() {
      return this.request('get_services', 'GET');
    }
  
    async getSlots() {
      return this.request('get_slots', 'GET');
    }
  
    async getStandardBroadcastMessages() {
      return this.request('get_standard_broadcast_messages', 'GET');
    }
  
    async getStandardPunishmentsMessages() {
      return this.request('get_standard_punishments_messages', 'GET');
    }
  
    async getStandardWelcomeMessages() {
      return this.request('get_standard_welcome_messages', 'GET');
    }
  
    async getStatus() {
      return this.request('get_status', 'GET');
    }
  
    async getSteamConfig() {
      return this.request('get_steam_config', 'GET');
    }
  
    async getStructuredLogs(since_min_ago, filter_action = null, filter_player = null) {
      return this.request('get_structured_logs', 'GET', { since_min_ago, filter_action, filter_player });
    }
  
    async getTeamObjectiveScores() {
      return this.request('get_team_objective_scores', 'GET');
    }
  
    async getTeamSwitchCooldown() {
      return this.request('get_team_switch_cooldown', 'GET');
    }
  
    async getTeamView() {
      return this.request('get_team_view', 'GET');
    }
  
    async getTempBans() {
      return this.request('get_temp_bans', 'GET');
    }
  
    async getTkBanOnConnectConfig() {
      return this.request('get_tk_ban_on_connect_config', 'GET');
    }
  
    async getVacGameBansConfig() {
      return this.request('get_vac_game_bans_config', 'GET');
    }
  
    async getVersion() {
      return this.request('get_version', 'GET');
    }
  
    async getVipIds() {
      return this.request('get_vip_ids', 'GET');
    }
  
    async getVipSlotsNum() {
      return this.request('get_vip_slots_num', 'GET');
    }
  
    async getVipsCount() {
      return this.request('get_vips_count', 'GET');
    }
  
    async getVotekickAutotoggleConfig() {
      return this.request('get_votekick_autotoggle_config', 'GET');
    }
  
    async getVotekickEnabled() {
      return this.request('get_votekick_enabled', 'GET');
    }
  
    async getVotekickThreshold() {
      return this.request('get_votekick_threshold', 'GET');
    }
  
    async getVotemapConfig() {
      return this.request('get_votemap_config', 'GET');
    }
  
    async getVotemapStatus() {
      return this.request('get_votemap_status', 'GET');
    }
  
    async getWatchlistDiscordWebhooksConfig() {
      return this.request('get_watchlist_discord_webhooks_config', 'GET');
    }
  
    async getWelcomeMessage() {
      return this.request('get_welcome_message', 'GET');
    }
  
    async isLoggedIn() {
      return this.request('is_logged_in', 'GET');
    }
  
    async liveScoreboard() {
      return this.request('live_scoreboard', 'GET');
    }
  
    async login() {
      return this.request('login', 'POST');
    }
  
    async logout() {
      return this.request('logout', 'POST');
    }
  
    async player() {
      return this.request('player', 'GET');
    }
  
    async playersHistory() {
      return this.request('players_history', 'GET');
    }
  
    async postPlayerComment() {
      return this.request('post_player_comment', 'POST');
    }
  
    async publicInfo() {
      return this.request('public_info', 'GET');
    }
  
    async resetVotemapState() {
      return this.request('reset_votemap_state', 'POST');
    }
  
    async runRawCommand() {
      return this.request('run_raw_command', 'POST');
    }
  
    async serverList() {
      return this.request('server_list', 'GET');
    }
  
    async setAdminPingsDiscordWebhooksConfig() {
      return this.request('set_admin_pings_discord_webhooks_config', 'POST');
    }
  
    async setAuditDiscordWebhooksConfig() {
      return this.request('set_audit_discord_webhooks_config', 'POST');
    }
  
    async setAutoBroadcastsConfig() {
      return this.request('set_auto_broadcasts_config', 'POST');
    }
  
    async setAutoModLevelConfig() {
      return this.request('set_auto_mod_level_config', 'POST');
    }
  
    async setAutoModNoLeaderConfig() {
      return this.request('set_auto_mod_no_leader_config', 'POST');
    }
  
    async setAutoModSeedingConfig() {
      return this.request('set_auto_mod_seeding_config', 'POST');
    }
  
    async setAutoModSoloTankConfig() {
      return this.request('set_auto_mod_solo_tank_config', 'POST');
    }
  
    async setAutoSettings() {
      return this.request('set_auto_settings', 'POST');
    }
  
    async setAutobalanceEnabled(bool_) {
      return this.request('set_autobalance_enabled', 'POST', { bool_ });
    }
  
    async setAutobalanceThreshold(max_diff) {
      return this.request('set_autobalance_threshold', 'POST', { max_diff });
    }
  
    async setBroadcast(msg, save = true) {
      return this.request('set_broadcast', 'POST', { msg, save });
    }
  
    async setCameraDiscordWebhooksConfig() {
      return this.request('set_camera_discord_webhooks_config', 'POST');
    }
  
    async setCameraNotificationConfig() {
      return this.request('set_camera_notification_config', 'POST');
    }
  
    async setChatCommandsConfig() {
      return this.request('set_chat_commands_config', 'POST');
    }
  
    async setChatDiscordWebhooksConfig() {
      return this.request('set_chat_discord_webhooks_config', 'POST');
    }
  
    async setExpiredVipConfig() {
      return this.request('set_expired_vip_config', 'POST');
    }
  
    async setIdleAutokickTime(minutes) {
      return this.request('set_idle_autokick_time', 'POST', { minutes });
    }
  
    async setKillsDiscordWebhooksConfig() {
      return this.request('set_kills_discord_webhooks_config', 'POST');
    }
  
    async setLogLineWebhookConfig() {
      return this.request('set_log_line_webhook_config', 'POST');
    }
  
    async setLogStreamConfig() {
      return this.request('set_log_stream_config', 'POST');
    }
  
    async setMap(map_name) {
      return this.request('set_map', 'POST', { map_name });
    }
  
    async setMapShuffleEnabled(enabled) {
      return this.request('set_map_shuffle_enabled', 'POST', { enabled });
    }
  
    async setMapRotation(rotation) {
      return this.request('set_maprotation', 'POST', { rotation });
    }
  
    async setMaxPingAutokick(max_ms) {
      return this.request('set_max_ping_autokick', 'POST', { max_ms });
    }
  
    async setName() {
      return this.request('set_name', 'POST');
    }
  
    async setNameKickConfig() {
      return this.request('set_name_kick_config', 'POST');
    }
  
    async setProfanities(profanities) {
      return this.request('set_profanities', 'POST', { profanities });
    }
  
    async setQueueLength(num) {
      return this.request('set_queue_length', 'POST', { num });
    }
  
    async setRconConnectionSettingsConfig() {
      return this.request('set_rcon_connection_settings_config', 'POST');
    }
  
    async setRconServerSettingsConfig() {
      return this.request('set_rcon_server_settings_config', 'POST');
    }
  
    async setRealVipConfig() {
      return this.request('set_real_vip_config', 'POST');
    }
  
    async setScorebotConfig() {
      return this.request('set_scorebot_config', 'POST');
    }
  
    async setServerNameChangeConfig() {
      return this.request('set_server_name_change_config', 'POST');
    }
  
    async setStandardBroadcastMessages() {
      return this.request('set_standard_broadcast_messages', 'POST');
    }
  
    async setStandardPunishmentsMessages() {
      return this.request('set_standard_punishments_messages', 'POST');
    }
  
    async setStandardWelcomeMessages() {
      return this.request('set_standard_welcome_messages', 'POST');
    }
  
    async setSteamConfig() {
      return this.request('set_steam_config', 'POST');
    }
  
    async setTeamSwitchCooldown(minutes) {
      return this.request('set_team_switch_cooldown', 'POST', { minutes });
    }
  
    async setTkBanOnConnectConfig() {
      return this.request('set_tk_ban_on_connect_config', 'POST');
    }
  
    async setVacGameBansConfig() {
      return this.request('set_vac_game_bans_config', 'POST');
    }
  
    async setVipSlotsNum(num) {
      return this.request('set_vip_slots_num', 'POST', { num });
    }
  
    async setVotekickAutotoggleConfig() {
      return this.request('set_votekick_autotoggle_config', 'POST');
    }
  
    async setVotekickEnabled(bool_) {
      return this.request('set_votekick_enabled', 'POST', { bool_ });
    }
  
    async setVotekickThreshold(threshold_pairs) {
      return this.request('set_votekick_threshold', 'POST', { threshold_pairs });
    }
  
    async setVotemapConfig() {
      return this.request('set_votemap_config', 'POST');
    }
  
    async setWatchlistDiscordWebhooksConfig() {
      return this.request('set_watchlist_discord_webhooks_config', 'POST');
    }
  
    async setWelcomeMessage(msg, save = true) {
      return this.request('set_welcome_message', 'POST', { msg, save });
    }
  
    async unban() {
      return this.request('unban', 'POST');
    }
  
    async unblacklistPlayer() {
      return this.request('unblacklist_player', 'POST');
    }
  
    async unflagPlayer() {
      return this.request('unflag_player', 'POST');
    }
  
    async uploadVips() {
      return this.request('upload_vips', 'POST');
    }
  
    async validateAdminPingsDiscordWebhooksConfig() {
      return this.request('validate_admin_pings_discord_webhooks_config', 'POST');
    }
  
    async validateAuditDiscordWebhooksConfig() {
      return this.request('validate_audit_discord_webhooks_config', 'POST');
    }
  
    async validateAutoBroadcastsConfig() {
      return this.request('validate_auto_broadcasts_config', 'POST');
    }
  
    async validateAutoModLevelConfig() {
      return this.request('validate_auto_mod_level_config', 'POST');
    }
  
    async validateAutoModNoLeaderConfig() {
      return this.request('validate_auto_mod_no_leader_config', 'POST');
    }
  
    async validateAutoModSeedingConfig() {
      return this.request('validate_auto_mod_seeding_config', 'POST');
    }
  
    async validateAutoModSoloTankConfig() {
      return this.request('validate_auto_mod_solo_tank_config', 'POST');
    }
  
    async validateCameraDiscordWebhooksConfig() {
      return this.request('validate_camera_discord_webhooks_config', 'POST');
    }
  
    async validateCameraNotificationConfig() {
      return this.request('validate_camera_notification_config', 'POST');
    }
  
    async validateChatCommandsConfig() {
      return this.request('validate_chat_commands_config', 'POST');
    }
  
    async validateChatDiscordWebhooksConfig() {
      return this.request('validate_chat_discord_webhooks_config', 'POST');
    }
  
    async validateExpiredVipConfig() {
      return this.request('validate_expired_vip_config', 'POST');
    }
  
    async validateKillsDiscordWebhooksConfig() {
      return this.request('validate_kills_discord_webhooks_config', 'POST');
    }
  
    async validateLogLineWebhookConfig() {
      return this.request('validate_log_line_webhook_config', 'POST');
    }
  
    async validateLogStreamConfig() {
      return this.request('validate_log_stream_config', 'POST');
    }
  
    async validateNameKickConfig() {
      return this.request('validate_name_kick_config', 'POST');
    }
  
    async validateRconConnectionSettingsConfig() {
      return this.request('validate_rcon_connection_settings_config', 'POST');
    }
  
    async validateRconServerSettingsConfig() {
      return this.request('validate_rcon_server_settings_config', 'POST');
    }
  
    async validateRealVipConfig() {
      return this.request('validate_real_vip_config', 'POST');
    }
  
    async validateScorebotConfig() {
      return this.request('validate_scorebot_config', 'POST');
    }
  
    async validateServerNameChangeConfig() {
      return this.request('validate_server_name_change_config', 'POST');
    }
  
    async validateStandardBroadcastMessages() {
      return this.request('validate_standard_broadcast_messages', 'POST');
    }
  
    async validateStandardPunishmentsMessages() {
      return this.request('validate_standard_punishments_messages', 'POST');
    }
  
    async validateStandardWelcomeMessages() {
      return this.request('validate_standard_welcome_messages', 'POST');
    }
  
    async validateSteamConfig() {
      return this.request('validate_steam_config', 'POST');
    }
  
    async validateTkBanOnConnectConfig() {
      return this.request('validate_tk_ban_on_connect_config', 'POST');
    }
  
    async validateVacGameBansConfig() {
      return this.request('validate_vac_game_bans_config', 'POST');
    }
  
    async validateVotekickAutotoggleConfig() {
      return this.request('validate_votekick_autotoggle_config', 'POST');
    }
  
    async validateVotemapConfig() {
      return this.request('validate_votemap_config', 'POST');
    }
  
    async validateWatchlistDiscordWebhooksConfig() {
      return this.request('validate_watchlist_discord_webhooks_config', 'POST');
    }
  }
  
  // Usage example
  // const api = new API('https://your-api-url.com');
  // api.getAdminGroups().then(data => console.log(data)).catch(error => console.error(error));
  
module.exports = API;
  