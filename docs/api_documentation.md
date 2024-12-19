# API Module Documentation

## Overview

This module provides a wrapper around various API endpoints, facilitating interaction with the backend. Each method corresponds to an API endpoint and uses the fetch API to perform HTTP requests.

This version is fully compatible with the CRCON v10 API, ensuring all current features and endpoints are supported.

## Constructor

### `constructor(baseURL, config = {})`

#### **Parameters**

- **`baseURL`** (string): The base URL of the API.
- **`config`** (object, optional): Configuration options for the API instance.
  - **`token`** (string, optional): A bearer token for authentication. If set, this token will be used for all API calls.

## Methods

### **Admin Management**

#### `add_admin`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (any) (default: None)
- `role` (any) (default: None)
- `description` (any) (default: None)

**Returns:** `boolean`

---

#### `remove_admin`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (any) (default: None)

**Returns:** `boolean`

---

#### `get_admin_groups`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `list[str]`

---

#### `get_admin_ids`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `list[rcon.types.AdminType]`

---

#### `get_ingame_mods`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `list[rcon.types.AdminUserType]`

---

#### `get_online_mods`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `list[rcon.types.AdminUserType]`

---

### **Logs**

#### `describe_log_line_webhook_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_log_stream_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_audit_logs`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_audit_logs_autocomplete`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_historical_logs`
No description provided.

**Supports HTTP methods:** GET, POST

**Parameters:**
- `player_name` (string (optional)) (default: None)
- `player_id` (string (optional)) (default: None)
- `action` (string (optional)) (default: None)
- `limit` (integer) (default: 1000)
- `from_` (any) (default: None)
- `till` (any) (default: None)
- `time_sort` (any) (default: desc)
- `exact_player_match` (boolean) (default: False)
- `exact_action` (boolean) (default: True)
- `server_filter` (string (optional)) (default: None)

**Returns:** `None`

---

#### `get_historical_logs_csv`
No description provided.

**Supports HTTP methods:** GET, POST

**No parameters required.**

**Returns:** `None`

---

#### `get_log_line_webhook_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.log_line_webhooks.LogLineWebhookUserConfig'>`

---

#### `get_log_stream_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_logs`
Returns raw text logs from the game server with no parsing performed

You most likely want to use a different method/endpoint to get parsed logs.

**Supports HTTP methods:** GET

**Parameters:**
- `since_min_ago` (any) (default: None)
- `filter_` (string) (default: )
- `by` (string) (default: )

**Returns:** `string`

---

#### `get_recent_logs`
No description provided.

**Supports HTTP methods:** GET, POST

**Parameters:**
- `filter_player` (any) (default: [])
- `filter_action` (any) (default: [])
- `inclusive_filter` (boolean) (default: True)
- `start` (integer) (default: 0)
- `end` (integer) (default: 10000)
- `exact_player_match` (boolean) (default: True)
- `exact_action` (boolean) (default: False)

**Returns:** `<class 'rcon.types.ParsedLogsType'>`

---

#### `get_structured_logs`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `since_min_ago` (integer) (default: None)
- `filter_action` (string (optional)) (default: None)
- `filter_player` (string (optional)) (default: None)

**Returns:** `<class 'rcon.types.ParsedLogsType'>`

---

#### `set_log_line_webhook_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_log_stream_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_log_line_webhook_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_log_stream_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

### **Auto Moderation**

#### `describe_auto_broadcasts_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_auto_mod_level_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_auto_mod_no_leader_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_auto_mod_seeding_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_auto_mod_solo_tank_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_auto_broadcasts_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.auto_broadcast.AutoBroadcastUserConfig'>`

---

#### `get_auto_mod_level_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.auto_mod_level.AutoModLevelUserConfig'>`

---

#### `get_auto_mod_no_leader_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.auto_mod_no_leader.AutoModNoLeaderUserConfig'>`

---

#### `get_auto_mod_seeding_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.auto_mod_seeding.AutoModSeedingUserConfig'>`

---

#### `get_auto_mod_solo_tank_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.auto_mod_solo_tank.AutoModNoSoloTankUserConfig'>`

---

#### `get_auto_settings`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `set_auto_broadcasts_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_auto_mod_level_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_auto_mod_no_leader_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_auto_mod_seeding_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `user_config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_auto_mod_solo_tank_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_auto_settings`
No description provided.

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** `None`

---

#### `validate_auto_broadcasts_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_auto_mod_level_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_auto_mod_no_leader_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_auto_mod_seeding_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_auto_mod_solo_tank_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_autobalance_enabled`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `value` (boolean) (default: None)

**Returns:** `boolean`

---

#### `set_autobalance_threshold`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `max_diff` (integer) (default: None)

**Returns:** `boolean`

---

### **Kicks, Bans & Blacklists**

#### `describe_name_kick_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_votekick_autotoggle_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_idle_autokick_time`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `integer`

---

#### `get_max_ping_autokick`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `integer`

---

#### `get_name_kick_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.name_kicks.NameKickUserConfig'>`

---

#### `get_votekick_autotoggle_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.auto_kick.AutoVoteKickUserConfig'>`

---

#### `get_votekick_enabled`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `boolean`

---

#### `get_votekick_thresholds`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `list[tuple[int, int]]`

---

#### `kick`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_name` (any) (default: None)
- `reason` (any) (default: None)
- `by` (any) (default: None)
- `player_id` (string (optional)) (default: None)

**Returns:** `boolean`

---

#### `reset_votekick_thresholds`
No description provided.

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** `boolean`

---

#### `set_idle_autokick_time`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `minutes` (any) (default: None)

**Returns:** `boolean`

---

#### `set_max_ping_autokick`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `max_ms` (any) (default: None)

**Returns:** `boolean`

---

#### `set_name_kick_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_votekick_autotoggle_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_votekick_enabled`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `value` (boolean) (default: None)

**Returns:** `boolean`

---

#### `set_votekick_thresholds`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `threshold_pairs` (any) (default: None)

**Returns:** `str | bool`

---

#### `validate_name_kick_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_votekick_autotoggle_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `describe_tk_ban_on_connect_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_vac_game_bans_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_ban`
get all bans from player_id
@param player_id: steam_id_64 or windows store ID of a user
@return: a array of bans

**Supports HTTP methods:** GET

**Parameters:**
- `player_id` (string) (default: None)

**Returns:** `list[rcon.types.GameServerBanType]`

---

#### `get_bans`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `list[rcon.types.GameServerBanType]`

---

#### `get_perma_bans`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `list[rcon.types.GameServerBanType]`

---

#### `get_temp_bans`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `list[rcon.types.GameServerBanType]`

---

#### `get_tk_ban_on_connect_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.ban_tk_on_connect.BanTeamKillOnConnectUserConfig'>`

---

#### `get_vac_game_bans_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.vac_game_bans.VacGameBansUserConfig'>`

---

#### `perma_ban`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_name` (any) (default: None)
- `player_id` (any) (default: None)
- `reason` (any) (default: )
- `by` (any) (default: )

**Returns:** `boolean`

---

#### `remove_perma_ban`
Remove a perma ban by ban log. Note that a player ID is a valid ban log.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: None)

**Returns:** `boolean`

---

#### `remove_temp_ban`
Remove a temp ban by player ID or game server ban log

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: None)

**Returns:** `boolean`

---

#### `set_tk_ban_on_connect_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_vac_game_bans_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `temp_ban`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_name` (string (optional)) (default: None)
- `player_id` (string (optional)) (default: None)
- `duration_hours` (integer) (default: 2)
- `reason` (string) (default: )
- `by` (string) (default: )

**Returns:** `boolean`

---

#### `unban`
Remove all temporary and permanent bans from the player_id.

This does not remove any blacklists, meaning the player may be immediately banned
again. To remove any bans or blacklists, use `unblacklist_player` instead.

Args:
    player_id: steam_id_64 or windows store ID

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: None)

**Returns:** `boolean`

---

#### `validate_tk_ban_on_connect_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_vac_game_bans_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `add_blacklist_record`
Adds a new record to a blacklist.

Blacklists are collections of ban-like records stored by CRCON
to provide greater flexibility and scalability.

Args:
    player_id: steam_id_64 or windows store ID to blacklist
    blacklist_id: The ID of the blacklist to use
    reason: The reason the player was blacklisted for
    expires_at: When the blacklist should expire, if ever
    admin_name: The person/tool that is blacklisting the player

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: None)
- `blacklist_id` (integer) (default: None)
- `reason` (string) (default: None)
- `expires_at` (any) (default: None)
- `admin_name` (string) (default: )

**Returns:** `<class 'rcon.types.BlacklistType'>`

---

#### `create_blacklist`
Creates a new, empty blacklist.

Blacklists are collections of ban-like records stored by CRCON
to provide greater flexibility and scalability.

Args:
    name:
        Name for the list
    sync:
        Method to use for synchronizing an active record with the
        game server. See `BlacklistSyncMethod` for more details.
    servers:
        A sequence of server numbers which this blacklist will
        apply to. `None` means all servers.

**Supports HTTP methods:** POST

**Parameters:**
- `name` (string) (default: None)
- `sync` (any) (default: BlacklistSyncMethod.KICK_ONLY)
- `servers` (any) (default: None)

**Returns:** `None`

---

#### `delete_blacklist`
Removes a blacklist alongside all of its records.

Blacklists are collections of ban-like records stored by CRCON
to provide greater flexibility and scalability.

Args:
    blacklist_id: The ID of the blacklist

**Supports HTTP methods:** POST

**Parameters:**
- `blacklist_id` (integer) (default: None)

**Returns:** `None`

---

#### `delete_blacklist_record`
Removes a blacklist record.

Blacklists are collections of ban-like records stored by CRCON
to provide greater flexibility and scalability.

Args:
    record_id: The ID of the record

**Supports HTTP methods:** POST

**Parameters:**
- `record_id` (integer) (default: None)

**Returns:** `boolean`

---

#### `edit_blacklist`
Edits a blacklist.

Blacklists are collections of ban-like records stored by CRCON
to provide greater flexibility and scalability.

Args:
    blacklist_id: The ID of the blacklist
    name: What to name the blacklist
    sync: Method to use for synchronizing records with the game
    servers: List of server numbers this blacklist applies to. `None` means all.

**Supports HTTP methods:** POST

**Parameters:**
- `blacklist_id` (integer) (default: None)
- `name` (string) (default: MISSING)
- `sync_method` (any) (default: MISSING)
- `servers` (any) (default: MISSING)

**Returns:** `None`

---

#### `edit_blacklist_record`
Edits a blacklist record.

Blacklists are collections of ban-like records stored by CRCON
to provide greater flexibility and scalability.

The blacklisted player ID cannot be edited. You instead need to
delete this record and create a new one.

Args:
    record_id: The ID of the record
    blacklist_id: The ID of the blacklist this record should be part of
    reason: The reason the player was blacklisted for
    expires_at: When the blacklist should expire, if ever

**Supports HTTP methods:** POST

**Parameters:**
- `record_id` (integer) (default: None)
- `blacklist_id` (integer) (default: MISSING)
- `reason` (string) (default: MISSING)
- `expires_at` (any) (default: MISSING)

**Returns:** `boolean`

---

#### `get_blacklist`
Get a blacklist and its respective records.

Blacklists are collections of ban-like records stored by CRCON
to provide greater flexibility and scalability.

Args:
    blacklist_id: The ID of the blacklist

**Supports HTTP methods:** GET

**Parameters:**
- `blacklist_id` (integer) (default: None)

**Returns:** `<class 'rcon.types.BlacklistWithRecordsType'>`

---

#### `get_blacklist_records`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `player_id` (string) (default: None)
- `reason` (string) (default: None)
- `blacklist_id` (integer) (default: None)
- `exclude_expired` (boolean) (default: False)
- `page_size` (integer) (default: 50)
- `page` (integer) (default: 1)

**Returns:** `None`

---

#### `get_blacklists`
Get all blacklists.

Blacklists are collections of ban-like records stored by CRCON
to provide greater flexibility and scalability.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `list[rcon.types.BlacklistType]`

---

#### `unblacklist_player`
Expires all blacklists of a player and unbans them from all servers.

Args:
    player_id: steam_id_64 or windows store ID

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: None)

**Returns:** `boolean`

---

### **Player Management**

#### `flag_player`
Adds a new flag to the specified player_id

Flags are used to label users and some tools use the flags to whitelist
users. They are traditionally an emoji (the frontend uses an emoji picker)
but there is no length restriction in the database.

Args:
    player_id: steam_id_64 or windows store ID
    player_name: The players name which will be added as an alias
    flag:
    comment:

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: None)
- `flag` (string) (default: None)
- `player_name` (string (optional)) (default: None)
- `comment` (string (optional)) (default: None)

**Returns:** `<class 'rcon.types.PlayerFlagType'>`

---

#### `get_detailed_player_info`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `player_name` (string) (default: None)
- `player` (any) (default: None)

**Returns:** `<class 'rcon.types.GetDetailedPlayer'>`

---

#### `get_detailed_players`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.types.GetDetailedPlayers'>`

---

#### `get_player_comments`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `player_id` (string) (default: None)

**Returns:** `list[rcon.types.PlayerCommentType]`

---

#### `get_player_info`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `player_name` (string) (default: None)
- `can_fail` (any) (default: False)

**Returns:** `None`

---

#### `get_player_messages`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `player_id` (string) (default: None)

**Returns:** `None`

---

#### `get_player_profile`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `player_id` (string) (default: None)
- `num_sessions` (integer) (default: 10)

**Returns:** `rcon.types.PlayerProfileTypeEnriched | None`

---

#### `get_playerids`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `as_dict` (any) (default: False)

**Returns:** `dict[str, str] | list[tuple[str, str]]`

---

#### `get_players`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `list[rcon.types.GetPlayersType]`

---

#### `get_players_history`
No description provided.

**Supports HTTP methods:** GET, POST

**Parameters:**
- `page` (integer) (default: 1)
- `page_size` (integer) (default: 500)
- `last_seen_from` (any) (default: None)
- `last_seen_till` (any) (default: None)
- `player_id` (string (optional)) (default: None)
- `player_name` (string (optional)) (default: None)
- `blacklisted` (boolean (optional)) (default: None)
- `is_watched` (boolean (optional)) (default: None)
- `exact_name_match` (boolean) (default: False)
- `ignore_accent` (boolean) (default: True)
- `flags` (any) (default: None)
- `country` (string (optional)) (default: None)

**Returns:** `None`

---

#### `post_player_comment`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: None)
- `comment` (string) (default: None)
- `by` (string) (default: None)

**Returns:** `None`

---

#### `punish`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_name` (string) (default: None)
- `reason` (string) (default: None)
- `by` (string) (default: None)

**Returns:** `boolean`

---

#### `switch_player_now`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_name` (string) (default: None)

**Returns:** `boolean`

---

#### `switch_player_on_death`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_name` (any) (default: None)
- `by` (any) (default: None)

**Returns:** `boolean`

---

#### `unflag_player`
Flags can be removed either by flag_id (database key) or by passing a player ID and flag

Args:
    flag_id: The database primary key of the flag record to delete
    player_id: steam_id_64 or windows store ID
    flag: The flag to remove from `player_id` if present

**Supports HTTP methods:** POST

**Parameters:**
- `flag_id` (integer (optional)) (default: None)
- `player_id` (string (optional)) (default: None)
- `flag` (string (optional)) (default: None)

**Returns:** `<class 'rcon.types.PlayerFlagType'>`

---

#### `unwatch_player`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: None)

**Returns:** `boolean`

---

#### `watch_player`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: None)
- `reason` (string) (default: None)
- `by` (string) (default: None)
- `player_name` (string (optional)) (default: None)

**Returns:** `boolean`

---

### **Messaging**

#### `message_player`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_name` (any) (default: None)
- `player_id` (any) (default: None)
- `message` (string) (default: )
- `by` (string) (default: )
- `save_message` (boolean) (default: False)

**Returns:** `string`

---

#### `add_message_template`
Add a new message template and return the ID of the new record

**Supports HTTP methods:** POST

**Parameters:**
- `title` (string) (default: None)
- `content` (string) (default: None)
- `category` (any) (default: None)
- `by` (string) (default: None)

**Returns:** `integer`

---

#### `delete_message_template`
Delete a specific message template

**Supports HTTP methods:** POST

**Parameters:**
- `id` (integer) (default: None)

**Returns:** `boolean`

---

#### `describe_standard_broadcast_messages`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_standard_punishments_messages`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_standard_welcome_messages`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `edit_message_template`
Add a new message template and return the ID of the new record

**Supports HTTP methods:** POST

**Parameters:**
- `id` (integer) (default: None)
- `title` (string (optional)) (default: None)
- `content` (string (optional)) (default: None)
- `category` (any) (default: None)
- `by` (string) (default: None)

**Returns:** `null`

---

#### `get_all_message_templates`
Get all message templates by category

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.types.AllMessageTemplateTypes'>`

---

#### `get_all_standard_message_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_broadcast_message`
Returns the current broadcast message if the cache is set

There is no RCON command to get the current broadcast message so it can only
be retrieved if it was set by CRCON and the cache has not expired

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `str | bytes | None`

---

#### `get_message_template`
Return the message template for the specified record if it exists

**Supports HTTP methods:** GET

**Parameters:**
- `id` (integer) (default: None)

**Returns:** `rcon.types.MessageTemplateType | None`

---

#### `get_message_template_categories`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `list[rcon.types.MessageTemplateCategory]`

---

#### `get_message_templates`
Get all possible message type categories

**Supports HTTP methods:** GET

**Parameters:**
- `category` (any) (default: None)

**Returns:** `list[rcon.types.MessageTemplateType]`

---

#### `get_standard_broadcast_messages`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.standard_messages.StandardBroadcastMessagesUserConfig'>`

---

#### `get_standard_punishments_messages`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.standard_messages.StandardPunishmentMessagesUserConfig'>`

---

#### `get_standard_welcome_messages`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.standard_messages.StandardWelcomeMessagesUserConfig'>`

---

#### `get_welcome_message`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `set_broadcast`
Set the in game broadcast message and return the previous message if set

**Supports HTTP methods:** POST

**Parameters:**
- `message` (string) (default: None)

**Returns:** `string`

---

#### `set_standard_broadcast_messages`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_standard_punishments_messages`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_standard_welcome_messages`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_welcome_message`
Set the in game welcome (rules) message and return the previous message if set

**Supports HTTP methods:** POST

**Parameters:**
- `message` (string) (default: None)

**Returns:** `string`

---

#### `validate_standard_broadcast_messages`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_standard_punishments_messages`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_standard_welcome_messages`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

### **VIP Management**

#### `add_vip`
Adds VIP status on the game server and adds or updates their PlayerVIP record.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: None)
- `description` (string) (default: None)
- `expiration` (string (optional)) (default: None)

**Returns:** `string`

---

#### `describe_expired_vip_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_real_vip_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_seed_vip_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `download_vips`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_expired_vip_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.expired_vips.ExpiredVipsUserConfig'>`

---

#### `get_real_vip_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.real_vip.RealVipUserConfig'>`

---

#### `get_seed_vip_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.seed_vip.SeedVIPUserConfig'>`

---

#### `get_vip_ids`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `list[rcon.types.VipIdType]`

---

#### `get_vip_slots_num`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `integer`

---

#### `get_vips_count`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `integer`

---

#### `remove_all_vips`
No description provided.

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** `boolean`

---

#### `remove_vip`
Removes VIP status on the game server and removes their PlayerVIP record.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (any) (default: None)

**Returns:** `boolean`

---

#### `set_expired_vip_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_real_vip_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_seed_vip_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_vip_slots_num`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `value` (integer) (default: None)

**Returns:** `boolean`

---

#### `upload_vips`
No description provided.

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** `None`

---

#### `upload_vips_result`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `validate_expired_vip_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_real_vip_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_seed_vip_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

### **Map Management**

#### `add_map_to_rotation`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_name` (string) (default: None)
- `after_map_name` (string (optional)) (default: None)
- `after_map_name_number` (integer (optional)) (default: None)

**Returns:** `string`

---

#### `add_map_to_votemap_whitelist`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_name` (string) (default: None)

**Returns:** `None`

---

#### `add_maps_to_rotation`
Add the given maps to the rotation, returns the game server response for each map

**Supports HTTP methods:** POST

**Parameters:**
- `map_names` (any) (default: None)

**Returns:** `list[tuple[str, str]]`

---

#### `add_maps_to_votemap_whitelist`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_names` (any) (default: None)

**Returns:** `None`

---

#### `describe_votemap_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_current_map_sequence`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `list[str]`

---

#### `get_map`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.maps.Layer'>`

---

#### `get_map_history`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_map_rotation`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `list[rcon.maps.Layer]`

---

#### `get_map_scoreboard`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_map_shuffle_enabled`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `boolean`

---

#### `get_maps`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `list[rcon.maps.Layer]`

---

#### `get_next_map`
Return the next map in the rotation as determined by the gameserver through the gamestate command

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.maps.Layer'>`

---

#### `get_previous_map`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_votemap_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.vote_map.VoteMapUserConfig'>`

---

#### `get_votemap_status`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `list[rcon.types.VoteMapStatusType]`

---

#### `get_votemap_whitelist`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `list[str]`

---

#### `remove_map_from_rotation`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_name` (string) (default: None)
- `map_number` (integer (optional)) (default: None)

**Returns:** `None`

---

#### `remove_map_from_votemap_whitelist`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_name` (string) (default: None)

**Returns:** `None`

---

#### `remove_maps_from_rotation`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_names` (any) (default: None)

**Returns:** `typing.Literal['SUCCESS']`

---

#### `remove_maps_from_votemap_whitelist`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_names` (any) (default: None)

**Returns:** `None`

---

#### `reset_map_votemap_whitelist`
No description provided.

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** `None`

---

#### `reset_votemap_state`
No description provided.

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** `list[rcon.types.VoteMapStatusType]`

---

#### `set_map`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_name` (string) (default: None)

**Returns:** `null`

---

#### `set_map_shuffle_enabled`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `enabled` (boolean) (default: None)

**Returns:** `null`

---

#### `set_maprotation`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_names` (any) (default: None)

**Returns:** `list[rcon.maps.Layer]`

---

#### `set_votemap_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_votemap_whitelist`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_names` (any) (default: None)

**Returns:** `None`

---

#### `validate_votemap_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

### **Server Settings & Status**

#### `clear_cache`
Clear every key in this servers Redis cache.

Many things in CRCON are cached in Redis to avoid excessively polling
the game server, this clears the entire cache which is sometimes necessary
to force a refresh

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** number of deleted keys.

---

#### `describe_rcon_connection_settings_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_rcon_server_settings_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** `boolean`

---

#### `describe_server_name_change_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_steam_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_connection_info`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_server_list`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_services`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `do_service`
No description provided.

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** `None`

---

#### `get_steam_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.steam.SteamUserConfig'>`

---

#### `get_version`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `is_logged_in`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `login`
No description provided.

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** `None`

---

#### `logout`
No description provided.

**Supports HTTP methods:** GET, POST

**No parameters required.**

**Returns:** `None`

---

#### `describe_admin_pings_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_audit_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_camera_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_camera_notification_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_chat_commands_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_chat_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_kills_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_rcon_chat_commands_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_scorebot_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_watchlist_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_admin_pings_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.webhooks.AdminPingWebhooksUserConfig'>`

---

#### `get_all_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_audit_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.webhooks.AuditWebhooksUserConfig'>`

---

#### `get_camera_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.webhooks.CameraWebhooksUserConfig'>`

---

#### `get_camera_notification_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.camera_notification.CameraNotificationUserConfig'>`

---

#### `get_chat_commands_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_chat_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.webhooks.ChatWebhooksUserConfig'>`

---

#### `get_kills_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_rcon_connection_settings_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.rcon_connection_settings.RconConnectionSettingsUserConfig'>`

---

#### `get_rcon_server_settings_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.rcon_server_settings.RconServerSettingsUserConfig'>`

---

#### `get_rcon_chat_commands_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_scorebot_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.scorebot.ScorebotUserConfig'>`

---

#### `get_watchlist_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.webhooks.WatchlistWebhooksUserConfig'>`

---

#### `set_admin_pings_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_audit_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_camera_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_camera_notification_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_chat_commands_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_chat_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `reconnect_gameserver`
Restart gunicorn workers which reconnects Rcon endpoint instances

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** `None`

---

#### `set_kills_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_rcon_chat_commands_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_rcon_connection_settings_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_rcon_server_settings_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_scorebot_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_server_name`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `name` (string) (default: None)

**Returns:** `None`

---

#### `set_server_name_change_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_watchlist_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_admin_pings_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---
#### `validate_audit_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_camera_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---
#### `validate_camera_notification_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---
#### `validate_chat_commands_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---
#### `validate_chat_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_kills_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---


#### `validate_rcon_chat_commands_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---
#### `validate_rcon_connection_settings_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---
#### `validate_rcon_server_settings_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_scorebot_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_server_name_change_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_steam_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `validate_watchlist_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `set_steam_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: None)
- `config` (any) (default: None)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: None)

**Returns:** `boolean`

---

#### `get_server_name_change_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.gtx_server_name.GtxServerNameChangeUserConfig'>`

---

#### `get_server_settings`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_name`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `string`

---

#### `get_public_info`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_status`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.types.StatusType'>`

---

### **Game Settings & Status**

#### `ban_profanities`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `profanities` (any) (default: None)

**Returns:** `boolean`

---

#### `unban_profanities`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `profanities` (any) (default: None)

**Returns:** `boolean`

---

#### `set_profanities`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `profanities` (any) (default: None)

**Returns:** `list[str]`

---



#### `get_profanities`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `list[str]`

---

#### `get_autobalance_enabled`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `boolean`

---

#### `get_autobalance_threshold`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `integer`

---

#### `get_gamestate`
Returns player counts, team scores, remaining match time and current/next map

Players: Allied: 0 - Axis: 1
Score: Allied: 2 - Axis: 2
Remaining Time: 0:11:51
Map: foy_warfare
Next Map: stmariedumont_warfare

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.types.GameStateType'>`

---

#### `get_live_game_stats`
Return stats for the currently playing match

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_live_scoreboard`
Return stats for all currently connected players (stats are reset on disconnect, not match start)

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_date_scoreboard`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `start` (integer) (default: None)
- `end` (integer) (default: None)

**Returns:** `None`

---

#### `run_raw_command`
No description provided.

**Supports HTTP methods:** GET, POST

**No parameters required.**

**Returns:** `None`

---

#### `get_round_time_remaining`
Returns the amount of time left in the round as seconds

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `float`

---

#### `get_scoreboard_maps`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_objective_row`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `row` (integer) (default: None)

**Returns:** `None`

---

#### `get_objective_rows`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `typing.List[typing.List[str]]`

---

#### `get_own_user_permissions`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_queue_length`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `integer`

---

#### `get_slots`
Return the current number of connected players and max players allowed

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.types.SlotsType'>`

---

#### `get_team_objective_scores`
Returns the number of objectives held by the allied/axis team respectively

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `tuple[int, int]`

---

#### `get_team_switch_cooldown`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `integer`

---

#### `get_team_view`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `set_game_layout`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `objectives` (any) (default: None)
- `random_constraints` (any) (default: 0)

**Returns:** `None`

---

#### `set_queue_length`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `value` (integer) (default: None)

**Returns:** `boolean`

---

#### `set_team_switch_cooldown`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `minutes` (integer) (default: None)

**Returns:** `boolean`

---