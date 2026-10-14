/**
 * Interactive BOM File Uploader & Spreadsheet Inspector
 * AskChips Clean Industrial Design System
 */

let uploaderInstanceCounter = 0;

export function initBomUploader(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return null;

  uploaderInstanceCounter += 1;
  const instanceId = `bom-upload-${uploaderInstanceCounter}`;
  const inputId = `${instanceId}-file-input`;

  const onFileChange = options.onFileChange || (() => {});
  const maxSizeBytes = 15 * 1024 * 1024; // 15MB
  const allowedExtensions = ['xlsx', 'xls', 'csv', 'txt', 'zip'];

  let currentFile = null;
  let fileMetadata = null;
  let errorMessage = '';

  const theme = options.theme || 'light';
  const isDark = theme === 'dark';

  function formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
  }

  function getFileExtension(filename) {
    return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2).toLowerCase();
  }

  function validateFile(file) {
    errorMessage = '';
    const ext = getFileExtension(file.name);

    if (!allowedExtensions.includes(ext)) {
      errorMessage = `Unsupported format (.${ext}). Please upload an Excel spreadsheet (.xlsx, .xls) or CSV file.`;
      return false;
    }

    if (file.size > maxSizeBytes) {
      errorMessage = `File size (${formatBytes(file.size)}) exceeds the 15MB limit. Please compress or email directly to rfq@askchips.com.`;
      return false;
    }

    return true;
  }

  function processFile(file) {
    if (!validateFile(file)) {
      currentFile = null;
      fileMetadata = null;
      onFileChange(null);
      render();
      return;
    }

    currentFile = file;
    errorMessage = '';

    const ext = getFileExtension(file.name);

    if (ext === 'csv' || ext === 'txt') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const lines = text.split(/\r\n|\n/).filter(line => line.trim().length > 0);
        // Exclude 1 header line if multiple lines exist
        const estimatedRows = Math.max(1, lines.length > 1 ? lines.length - 1 : lines.length);

        fileMetadata = {
          name: file.name,
          sizeFormatted: formatBytes(file.size),
          estimatedRows: estimatedRows,
          extension: ext,
          rawFile: file
        };

        onFileChange(fileMetadata);
        render();
      };
      reader.readAsText(file.slice(0, 500000)); // Read first 500KB for rapid row estimation
    } else {
      // Binary Excel/Zip
      const estimatedRows = Math.max(5, Math.min(2500, Math.floor(file.size / 650)));
      fileMetadata = {
        name: file.name,
        sizeFormatted: formatBytes(file.size),
        estimatedRows: estimatedRows,
        extension: ext,
        rawFile: file
      };

      onFileChange(fileMetadata);
      render();
    }
  }

  function removeFile() {
    currentFile = null;
    fileMetadata = null;
    errorMessage = '';
    onFileChange(null);
    render();
  }

  function render() {
    if (fileMetadata) {
      // Populated Attachment Card State
      container.innerHTML = `
        <div class="border ${isDark ? 'border-emerald-500/40 bg-emerald-950/40 text-white' : 'border-emerald-200 bg-emerald-50/50'} rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all">
          <div class="flex items-center gap-3.5 min-w-0">
            <div class="w-10 h-10 rounded-lg ${isDark ? 'bg-emerald-900/60 border border-emerald-700/50 text-emerald-400' : 'bg-emerald-100 text-emerald-700'} flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <span class="text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'} truncate max-w-[200px] sm:max-w-xs">${fileMetadata.name}</span>
                <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${isDark ? 'bg-emerald-900/80 text-emerald-300 border border-emerald-700/60' : 'bg-emerald-100 text-emerald-800'}">
                  Ready
                </span>
              </div>
              <div class="text-xs font-mono ${isDark ? 'text-slate-300' : 'text-slate-500'} mt-0.5">
                ${fileMetadata.sizeFormatted} • ~${fileMetadata.estimatedRows} line items detected
              </div>
            </div>
          </div>
          <button type="button" id="${instanceId}-btn-remove"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${isDark ? 'text-red-300 bg-red-950/60 hover:bg-red-900/80 border border-red-800/60' : 'text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700'} transition">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
            Remove File
          </button>
        </div>
      `;

      const removeBtn = container.querySelector(`#${instanceId}-btn-remove`);
      if (removeBtn) {
        removeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          removeFile();
        });
      }
    } else {
      // Empty Dropzone State
      const borderClass = isDark
        ? (errorMessage ? 'border-red-500/80 bg-red-950/20' : 'border-slate-600 hover:border-blue-400 bg-slate-900/60 hover:bg-slate-900')
        : (errorMessage ? 'border-red-400 bg-red-50/30' : 'border-slate-300 hover:border-blue-500 bg-slate-50/60 hover:bg-blue-50/30');

      const iconBgClass = isDark
        ? (errorMessage ? 'bg-red-900/50 text-red-400' : 'bg-blue-950/80 text-blue-400 border border-blue-800/60')
        : (errorMessage ? 'bg-red-100 text-red-600' : 'bg-blue-50 text-blue-600');

      const textPrimary = isDark ? 'text-slate-200' : 'text-slate-800';
      const linkColor = isDark ? 'text-blue-400' : 'text-blue-600';
      const subtextColor = isDark ? 'text-slate-400' : 'text-slate-500';

      container.innerHTML = `
        <div id="${instanceId}-dropzone"
          class="group border-2 border-dashed ${borderClass} rounded-xl p-6 sm:p-7 text-center cursor-pointer transition-all">
          <input type="file" id="${inputId}" class="hidden" accept=".xlsx,.xls,.csv,.txt,.zip">
          
          <div class="w-12 h-12 mx-auto rounded-full ${iconBgClass} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            ${errorMessage ? `
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
            ` : `
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
              </svg>
            `}
          </div>

          <div class="text-sm font-semibold ${textPrimary}">
            <span class="${linkColor} underline underline-offset-2">Click to select BOM file</span> or drag & drop here
          </div>
          <div class="text-xs font-mono ${subtextColor} mt-1">
            Supports Excel (.xlsx, .xls) and CSV up to 15MB • Confidentiality Guaranteed
          </div>

          ${errorMessage ? `
            <div class="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md ${isDark ? 'bg-red-900/80 border border-red-700/80 text-red-200' : 'bg-red-100 text-red-700'} text-xs font-medium">
              ${errorMessage}
            </div>
          ` : ''}
        </div>
      `;

      bindDropzoneEvents();
    }
  }

  function bindDropzoneEvents() {
    const dropzone = container.querySelector(`#${instanceId}-dropzone`);
    const fileInput = container.querySelector(`#${inputId}`);
    if (!dropzone || !fileInput) return;

    dropzone.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        processFile(e.target.files[0]);
      }
    });

    // Drag-and-drop
    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.add('border-blue-500', 'bg-blue-50/50');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.remove('border-blue-500', 'bg-blue-50/50');
      }, false);
    });

    dropzone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      if (dt && dt.files && dt.files.length > 0) {
        processFile(dt.files[0]);
      }
    }, false);
  }

  // Initial render
  render();

  return {
    getFileMetadata: () => fileMetadata,
    clearFile: removeFile
  };
}
